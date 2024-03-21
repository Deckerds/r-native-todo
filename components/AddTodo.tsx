import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

type Props = {
  onPressAdd: (val: string) => void;
};

const AddTodo: FC<Props> = ({ onPressAdd }) => {
  const [text, setText] = useState('');
  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Add Todo</Text>
      <TextInput
        style={styles.input}
        placeholder='New todo...'
        onChangeText={changeHandler}
      />
      <Button title='Add todo' onPress={() => onPressAdd(text)} color='#F08080' />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  input: {
    borderWidth: 1,
    borderColor: '#87CEEB',
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 16,
    marginBottom: 10,
    marginTop: 20,
  },
});

export default AddTodo;
