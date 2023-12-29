import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const PreferencesSettingScreen = () => {
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedSpeakers, setSelectedSpeakers] = useState([]);
  const [selectedSessionTypes, setSelectedSessionTypes] = useState([]);
  const topics = ['AI', 'ML', 'DL', 'DS', 'Python', 'JS'];
  const speakers = ['Speaker 1', 'Speaker 2', 'Speaker 3', 'Speaker 4'];
  const sessionTypes = ['Type 1', 'Type 2', 'Type 3', 'Type 4'];
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.title}>Preferred Topics</Text>
          {topics.map((topic, index) => <TouchableOpacity key={index} style={selectedTopics.includes(topic) ? styles.selectedItem : styles.item} onPress={() => setSelectedTopics([...selectedTopics, topic])}>
              <Text style={styles.itemText}>{topic}</Text>
            </TouchableOpacity>)}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Preferred Speakers</Text>
          {speakers.map((speaker, index) => <TouchableOpacity key={index} style={selectedSpeakers.includes(speaker) ? styles.selectedItem : styles.item} onPress={() => setSelectedSpeakers([...selectedSpeakers, speaker])}>
              <Text style={styles.itemText}>{speaker}</Text>
            </TouchableOpacity>)}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Preferred Session Types</Text>
          {sessionTypes.map((type, index) => <TouchableOpacity key={index} style={selectedSessionTypes.includes(type) ? styles.selectedItem : styles.item} onPress={() => setSelectedSessionTypes([...selectedSessionTypes, type])}>
              <Text style={styles.itemText}>{type}</Text>
            </TouchableOpacity>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  item: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 10
  },
  selectedItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    marginBottom: 10
  },
  itemText: {
    fontSize: 16
  }
});
export default PreferencesSettingScreen;