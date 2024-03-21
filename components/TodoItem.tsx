import React, { FC } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export type Props = {
  item: {
    text: string;
    key: string;
  };
  pressHandler: (key: string) => void;
};

export const TodoItem: FC<Props> = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginBottom: 16,
    borderColor: '#D8BFD8',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
  },
});

export default TodoItem;
