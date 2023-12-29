import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

const LeadCaptureScreen = () => {
  const [lead, setLead] = useState({
    name: '',
    contact: '',
    interests: '',
    interactions: ''
  });

  const handleInputChange = (field, value) => {
    setLead({ ...lead,
      [field]: value
    });
  };

  const handleSubmit = () => {
    console.log(lead);
  };

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Lead Capture Interface</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} onChangeText={text => handleInputChange('name', text)} />
          <Text style={styles.label}>Contact</Text>
          <TextInput style={styles.input} onChangeText={text => handleInputChange('contact', text)} />
          <Text style={styles.label}>Interests</Text>
          <TextInput style={styles.input} onChangeText={text => handleInputChange('interests', text)} />
          <Text style={styles.label}>Interactions</Text>
          <TextInput style={styles.input} onChangeText={text => handleInputChange('interactions', text)} />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5
  }
});
export default LeadCaptureScreen;