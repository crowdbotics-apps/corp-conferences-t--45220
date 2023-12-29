import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';
const data = [{
  id: '1',
  title: 'Overall Satisfaction',
  value: '85%'
}, {
  id: '2',
  title: 'Venue Rating',
  value: '90%'
}, {
  id: '3',
  title: 'Food & Beverage Rating',
  value: '80%'
}, {
  id: '4',
  title: 'Speaker Rating',
  value: '95%'
}, {
  id: '5',
  title: 'Event Organization',
  value: '88%'
}];

const DashboardItem = ({
  title,
  value
}) => <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemValue}>{value}</Text>
  </View>;

const AttendeeSatisfactionAnalyticsDashboard = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Attendee Satisfaction Analytics Dashboard</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <FlatList data={data} keyExtractor={item => item.id} renderItem={({
      item
    }) => <DashboardItem title={item.title} value={item.value} />} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 18,
    color: '#333'
  },
  itemValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default AttendeeSatisfactionAnalyticsDashboard;