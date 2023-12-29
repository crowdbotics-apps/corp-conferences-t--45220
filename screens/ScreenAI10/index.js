import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, StyleSheet } from 'react-native';

const ManageSpeakersScreen = () => {
  const [speakers, setSpeakers] = useState([{
    name: 'John Doe',
    bio: 'Software Engineer at XYZ',
    affiliation: 'XYZ',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    name: 'Jane Doe',
    bio: 'Product Manager at ABC',
    affiliation: 'ABC',
    image: 'https://tinyurl.com/42evm3m3'
  }]);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [affiliation, setAffiliation] = useState('');
  const [image, setImage] = useState('');

  const addSpeaker = () => {
    setSpeakers([...speakers, {
      name,
      bio,
      affiliation,
      image
    }]);
    setName('');
    setBio('');
    setAffiliation('');
    setImage('');
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Manage Speakers</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Bio" value={bio} onChangeText={setBio} />
        <TextInput style={styles.input} placeholder="Affiliation" value={affiliation} onChangeText={setAffiliation} />
        <TextInput style={styles.input} placeholder="Image URL" value={image} onChangeText={setImage} />
        <Button title="Add Speaker" onPress={addSpeaker} />
      </View>
      <FlatList data={speakers} keyExtractor={item => item.name} renderItem={({
      item
    }) => <View style={styles.speakerCard}>
            <Image style={styles.speakerImage} source={{
        uri: item.image
      }} />
            <Text style={styles.speakerName}>{item.name}</Text>
            <Text style={styles.speakerBio}>{item.bio}</Text>
            <Text style={styles.speakerAffiliation}>{item.affiliation}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
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
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  speakerCard: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10
  },
  speakerImage: {
    width: '100%',
    height: 200
  },
  speakerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  speakerBio: {
    fontSize: 16,
    marginTop: 10
  },
  speakerAffiliation: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 10
  }
});
export default ManageSpeakersScreen;