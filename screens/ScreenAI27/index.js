import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';

const ExhibitorProfilesManagement = () => {
  const [exhibitors, setExhibitors] = useState([{
    id: '1',
    name: 'Company 1',
    contact: 'contact1@company.com',
    booth: 'A1',
    promo: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'Company 2',
    contact: 'contact2@company.com',
    booth: 'B2',
    promo: 'https://tinyurl.com/42evm3m3'
  }]);
  const [newExhibitor, setNewExhibitor] = useState({
    id: '',
    name: '',
    contact: '',
    booth: '',
    promo: ''
  });

  const addExhibitor = () => {
    setExhibitors([...exhibitors, newExhibitor]);
    setNewExhibitor({
      id: '',
      name: '',
      contact: '',
      booth: '',
      promo: ''
    });
  };

  const deleteExhibitor = id => {
    setExhibitors(exhibitors.filter(exhibitor => exhibitor.id !== id));
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Exhibitor Profiles Management</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="ID" style={styles.input} onChangeText={text => setNewExhibitor({ ...newExhibitor,
        id: text
      })} />
        <TextInput placeholder="Name" style={styles.input} onChangeText={text => setNewExhibitor({ ...newExhibitor,
        name: text
      })} />
        <TextInput placeholder="Contact" style={styles.input} onChangeText={text => setNewExhibitor({ ...newExhibitor,
        contact: text
      })} />
        <TextInput placeholder="Booth" style={styles.input} onChangeText={text => setNewExhibitor({ ...newExhibitor,
        booth: text
      })} />
        <TextInput placeholder="Promo" style={styles.input} onChangeText={text => setNewExhibitor({ ...newExhibitor,
        promo: text
      })} />
        <Button title="Add Exhibitor" onPress={addExhibitor} />
      </View>
      <FlatList data={exhibitors} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardText}>{item.contact}</Text>
            <Text style={styles.cardText}>{item.booth}</Text>
            <Image source={{
        uri: item.promo
      }} style={styles.image} />
            <Button title="Delete" onPress={() => deleteExhibitor(item.id)} />
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
    marginBottom: 20
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },
  cardText: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200
  }
});
export default ExhibitorProfilesManagement;