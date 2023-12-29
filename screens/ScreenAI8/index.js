import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Image } from 'react-native';

const EventScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [speakers, setSpeakers] = useState('');
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <TextInput style={styles.input} onChangeText={setTitle} value={title} placeholder="Event Title" />
      <TextInput style={styles.input} onChangeText={setDescription} value={description} placeholder="Event Description" />
      <TextInput style={styles.input} onChangeText={setTime} value={time} placeholder="Event Time" />
      <TextInput style={styles.input} onChangeText={setLocation} value={location} placeholder="Event Location" />
      <TextInput style={styles.input} onChangeText={setPrice} value={price} placeholder="Ticket Price" />
      <TextInput style={styles.input} onChangeText={setSpeakers} value={speakers} placeholder="Speakers" />
      <Button title="Submit" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  }
});
export default EventScreen;