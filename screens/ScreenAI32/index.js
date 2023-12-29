import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const FormScreen = () => {
  const [fields, setFields] = useState([{
    type: 'text',
    value: ''
  }]);

  const addField = () => {
    setFields([...fields, {
      type: 'text',
      value: ''
    }]);
  };

  const renderField = (field, index) => <View style={styles.fieldContainer} key={index}>
      <TextInput style={styles.input} onChangeText={text => {
      const newFields = [...fields];
      newFields[index].value = text;
      setFields(newFields);
    }} value={field.value} />
    </View>;

  return <SafeAreaView style={styles.container}>
      <ScrollView>
        {fields.map(renderField)}
        <Button title="Add Field" onPress={addField} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  fieldContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    paddingLeft: 10
  }
});
export default FormScreen;