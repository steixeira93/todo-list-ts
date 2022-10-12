import React, {useState, useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../componentes/Button';
import {TodoCard} from '../componentes/TodoCard';

interface TodoData {
  id: string;
  name: string;
}

export function Home() {
  const [newTodo, setNewTodo] = useState('');
  const [myTodos, setMyTodos] = useState<TodoData[]>([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewTodo() {
    const data = {
      id: String(new Date().getTime()),
      name: newTodo,
    };
    setMyTodos(oldState => [...oldState, data]);
  }

  function handleRemoveNewTodo(id: string) {
      setMyTodos(oldState => oldState.filter(
        todo => todo.id !== id
      ));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> what do i have to do </Text>
      <Text style={styles.greetings}> {gretting} </Text>

      <TextInput
        style={styles.input}
        placeholder="New todo"
        placeholderTextColor="#32039"
        onChangeText={setNewTodo}
      />

      <Button onPress={handleAddNewTodo}  title="Add" />

      <Text style={styles.subtitle}>a to-do list</Text>

      <FlatList
        data={myTodos}
        keyExtractor={item => item.id}
        renderItem={({item}) => 
        <TodoCard 
          todo={item.name} 
          onPress={() => handleRemoveNewTodo(item.id)}
        />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#FFF5F5',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#F7A5A5',
  },
  subtitle: {
    marginVertical: 30,
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F7A5A5',
  },
  input: {
    backgroundColor: '#FFDADA',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: '##FFF5F5',
    alignSelf: 'center',
  },
});
