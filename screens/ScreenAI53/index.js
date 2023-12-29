import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';
const data = [{
  id: '1',
  title: 'Users Accessed VR',
  value: '1500'
}, {
  id: '2',
  title: 'Average Engagement Duration',
  value: '15 mins'
}, {
  id: '3',
  title: 'Popular Navigation Patterns',
  value: 'Trade Show Floor -> Virtual Tours'
}];

const DashboardItem = ({
  item
}) => <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Text style={styles.itemValue}>{item.value}</Text>
  </View>;

const VRExperienceAnalyticsDashboard = () => <SafeAreaView style={styles.container}>
    <Image style={styles.image} source={{
    uri: 'https://tinyurl.com/42evm3m3'
  }} />
    <Text style={styles.title}>VR Experience Analytics Dashboard</Text>
    <FlatList data={data} renderItem={DashboardItem} keyExtractor={item => item.id} />
  </SafeAreaView>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  itemValue: {
    fontSize: 16
  }
});
export default VRExperienceAnalyticsDashboard;