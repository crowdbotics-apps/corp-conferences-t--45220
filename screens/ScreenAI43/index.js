import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const leadsData = [{
  id: '1',
  name: 'Lead 1',
  status: 'Contacted',
  source: 'Event A'
}, {
  id: '2',
  name: 'Lead 2',
  status: 'Not Contacted',
  source: 'Event B'
}, {
  id: '3',
  name: 'Lead 3',
  status: 'Contacted',
  source: 'Event C'
} // Add more leads as needed
];

const LeadManagementDashboard = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lead Management Dashboard</Text>
      <FlatList data={leadsData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.leadItem}>
            <Image style={styles.leadImage} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.leadDetails}>
              <Text style={styles.leadName}>{item.name}</Text>
              <Text style={styles.leadStatus}>Status: {item.status}</Text>
              <Text style={styles.leadSource}>Source: {item.source}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  leadItem: {
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center'
  },
  leadImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  leadDetails: {
    flex: 1
  },
  leadName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  leadStatus: {
    fontSize: 16,
    color: '#666'
  },
  leadSource: {
    fontSize: 16,
    color: '#666'
  }
});
export default LeadManagementDashboard;