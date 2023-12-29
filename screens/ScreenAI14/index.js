import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const attendees = [{
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
}, {
  id: '2',
  name: 'Jane Doe',
  email: 'jane@example.com'
}, {
  id: '3',
  name: 'Bob Smith',
  email: 'bob@example.com'
} // Add more attendees as needed
];

const AttendeeDirectory = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={attendees} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    flexDirection: 'row',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  infoContainer: {
    margin: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: '#888'
  }
});
export default AttendeeDirectory;