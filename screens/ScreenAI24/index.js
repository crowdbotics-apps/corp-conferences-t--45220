import React, { useState } from 'react';
import { SafeAreaView, Text, Image, Button, StyleSheet } from 'react-native';

const FloorPlanUploadInterface = () => {
  const [image, setImage] = useState('https://tinyurl.com/42evm3m3');

  const uploadImage = () => {// Function to upload image
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Floor Plan Upload Interface</Text>
      <Image source={{
      uri: image
    }} style={styles.image} />
      <Button title="Upload Floor Plan" onPress={uploadImage} />
      <Text style={styles.description}>
        Upload the floor plans of your trade show or conference. Provide a detailed layout of the event space, including the location of exhibitor booths, stages, restrooms, exits, and other important areas. The uploaded floor plan will be used to generate an interactive map for attendees and exhibitors.
      </Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: '90%',
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20
  }
});
export default FloorPlanUploadInterface;