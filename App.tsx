import { useState } from 'react';
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'Create an native app', key: '2' },
    { text: 'Play on PC', key: '3' },
  ]);

  const pressHandler = (key: string) => {
    setTodos((prev) => prev.filter((todo) => todo.key != key));
  };

  const onPressAdd = (val: string) => {
    const keyValue = todos.length + 1;

    if (val.length > 3) {
      setTodos((prev) => [
        ...prev,
        {
          text: val,
          key: keyValue.toString(),
        },
      ]);
    } else {
      Alert.alert('OOPS!', 'Todo needs to be atleast 4 characters long', [
        {
          text: 'Understood',
          onPress: () => console.log('Alert Closed'),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View>
          {/* todo form */}
          <AddTodo onPressAdd={onPressAdd} />

          <View style={styles.list}>
            <Text style={styles.title}>Todos</Text>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  list: {
    marginHorizontal: 10,
  },
});
