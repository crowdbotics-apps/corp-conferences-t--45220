import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, Button } from 'react-native';

const AIConfigScreen = () => {
  const dummyData = {
    eventName: 'Tech Conference 2022',
    aiParameters: ['Preference Matching', 'Past Behavior Analysis', 'Demographic Analysis']
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>{dummyData.eventName}</Text>
      </View>
      <Text style={styles.subtitle}>AI Algorithm Configuration</Text>
      <View style={styles.content}>
        {dummyData.aiParameters.map((parameter, index) => <View key={index} style={styles.parameter}>
            <Text style={styles.parameterText}>{parameter}</Text>
            <Button title="Configure" onPress={() => {}} />
          </View>)}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20
  },
  content: {
    flex: 1
  },
  parameter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2
  },
  parameterText: {
    fontSize: 16
  }
});
export default AIConfigScreen;