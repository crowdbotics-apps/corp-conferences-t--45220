import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const DATA = [{
  id: '1',
  title: 'Session 1',
  description: 'This is a brief description of Session 1.'
}, {
  id: '2',
  title: 'Session 2',
  description: 'This is a brief description of Session 2.'
}, {
  id: '3',
  title: 'Session 3',
  description: 'This is a brief description of Session 3.'
}];

const Item = ({
  title,
  description
}) => <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>;

const PersonalizedAgendaRecommendationInterface = () => {
  const renderItem = ({
    item
  }) => <Item title={item.title} description={item.description} />;

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.headerText}>Personalized Agenda</Text>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 8,
    fontSize: 16
  }
});
export default PersonalizedAgendaRecommendationInterface;