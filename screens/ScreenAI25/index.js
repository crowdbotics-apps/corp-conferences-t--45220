import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

const BoothDetails = () => {
  const boothData = {
    location: 'Aisle 3, Booth 7',
    companyName: 'XYZ Corp.',
    description: 'XYZ Corp. specializes in innovative tech solutions.',
    contact: 'info@xyzcorp.com'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Booth Details</Text>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.text}>Location: {boothData.location}</Text>
        <Text style={styles.text}>Company: {boothData.companyName}</Text>
        <Text style={styles.text}>About: {boothData.description}</Text>
        <Text style={styles.text}>Contact: {boothData.contact}</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    padding: 20,
    backgroundColor: '#1E88E5'
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF'
  },
  content: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  }
});
export default BoothDetails;