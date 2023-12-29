import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const BoothAssignmentInterface = () => {
  const [exhibitors, setExhibitors] = useState([{
    id: '1',
    name: 'Exhibitor 1',
    booth: 'A1'
  }, {
    id: '2',
    name: 'Exhibitor 2',
    booth: 'A2'
  }, {
    id: '3',
    name: 'Exhibitor 3',
    booth: 'A3'
  } // Add more exhibitors as needed
  ]);

  const assignBooth = (id, booth) => {
    setExhibitors(exhibitors.map(exhibitor => exhibitor.id === id ? { ...exhibitor,
      booth
    } : exhibitor));
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Booth Assignment Interface</Text>
      <FlatList data={exhibitors} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.booth}>Booth: {item.booth}</Text>
            <TouchableOpacity style={styles.button} onPress={() => assignBooth(item.id, 'B1')}>
              <Text style={styles.buttonText}>Assign to B1</Text>
            </TouchableOpacity>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  booth: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
export default BoothAssignmentInterface;