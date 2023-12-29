import React, { useState } from 'react';
import { SafeAreaView, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const sessionsData = [{
  id: '1',
  title: 'Session 1',
  selected: false
}, {
  id: '2',
  title: 'Session 2',
  selected: false
}, {
  id: '3',
  title: 'Session 3',
  selected: false
}, {
  id: '4',
  title: 'Session 4',
  selected: false
}, {
  id: '5',
  title: 'Session 5',
  selected: false
}];

const AgendaCustomizationScreen = () => {
  const [sessions, setSessions] = useState(sessionsData);

  const selectSession = id => {
    setSessions(sessions.map(session => session.id === id ? { ...session,
      selected: !session.selected
    } : session));
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agenda Customization</Text>
      <FlatList data={sessions} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.sessionItem} onPress={() => selectSession(item.id)}>
            <Text style={styles.sessionTitle}>{item.title}</Text>
            {item.selected && <Image style={styles.checkIcon} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />}
          </TouchableOpacity>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  sessionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 3
  },
  sessionTitle: {
    flex: 1,
    fontSize: 18,
    color: '#333'
  },
  checkIcon: {
    width: 24,
    height: 24
  }
});
export default AgendaCustomizationScreen;