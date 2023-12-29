import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Text, ScrollView } from 'react-native';

const VRTradeShowFloorInterface = () => {
  const booths = new Array(10).fill({
    image: 'https://tinyurl.com/42evm3m3',
    name: 'Exhibitor Booth',
    description: 'This is a virtual exhibitor booth. You can interact with it to learn more.'
  });
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>VR Trade Show Floor Interface</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {booths.map((booth, index) => <View key={index} style={styles.boothContainer}>
            <Image source={{
          uri: booth.image
        }} style={styles.boothImage} />
            <Text style={styles.boothName}>{booth.name}</Text>
            <Text style={styles.boothDescription}>{booth.description}</Text>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20
  },
  scrollContainer: {
    paddingBottom: 20
  },
  boothContainer: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3
  },
  boothImage: {
    width: '100%',
    height: 200
  },
  boothName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    margin: 10
  },
  boothDescription: {
    fontSize: 14,
    color: '#666',
    marginHorizontal: 10,
    marginBottom: 10
  }
});
export default VRTradeShowFloorInterface;