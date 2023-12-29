import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';
const speakersData = [{
  id: '1',
  name: 'John Doe',
  bio: 'John Doe is a renowned speaker with expertise in technology.',
  sessions: ['Session 1', 'Session 2'],
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Jane Smith',
  bio: 'Jane Smith is a leading expert in the field of science.',
  sessions: ['Session 3', 'Session 4'],
  image: 'https://tinyurl.com/42evm3m3'
}];

const SpeakerScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={speakersData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.card}>
            <Image style={styles.image} source={{
        uri: item.image
      }} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.bio}>{item.bio}</Text>
            <Text style={styles.sessionsTitle}>Sessions:</Text>
            {item.sessions.map((session, index) => <Text key={index} style={styles.session}>
                {session}
              </Text>)}
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  bio: {
    fontSize: 16,
    marginTop: 10
  },
  sessionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  session: {
    fontSize: 16,
    marginTop: 5
  }
});
export default SpeakerScreen;