import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';

const VirtualTourCreationInterface = () => {
  const [images, setImages] = useState([{
    id: '1',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    url: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    url: 'https://tinyurl.com/42evm3m3'
  }]);

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image source={{
      uri: item.url
    }} style={styles.image} />
      <Button title="Arrange" onPress={() => {}} />
    </View>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Virtual Tour Creation Interface</Text>
      <Button title="Upload 3D Model/Panoramic Image" onPress={() => {}} />
      <FlatList data={images} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={styles.buttonContainer}>
        <Button title="Create Guided Tour" onPress={() => {}} />
        <Button title="Create Free Exploration Mode" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 100,
    height: 100
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  }
});
export default VirtualTourCreationInterface;