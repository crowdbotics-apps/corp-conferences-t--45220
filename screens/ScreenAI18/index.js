import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'John Doe',
  status: 'Pending'
}, {
  id: '2',
  name: 'Jane Doe',
  status: 'Accepted'
}, {
  id: '3',
  name: 'Jim Doe',
  status: 'Rejected'
}];

const ConnectionRequestScreen = () => {
  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.status}>{item.status}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Accept" onPress={() => {}} />
        <Button title="Reject" onPress={() => {}} />
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  status: {
    fontSize: 14,
    color: '#757575'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100
  }
});
export default ConnectionRequestScreen;