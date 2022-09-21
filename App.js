import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = (id) => {
    const item = todos.find(el => el.id === id)
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${item.title}`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          style: "destructive",
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      {
        cancelable: false,
        onDismiss: () =>
          Alert.alert('This alert was dismissed by tapping outside of the alert dialog.'),
      }
    )
  }
  const selectedTodo = todos.find(el => el.id === todoId)
  const updateTodo = (id, title) => {
    setTodos(old => old.map(el => {
      if(el.id === id){
        el.title = title
      }
      return el
    }))
  }

  let content = todoId ?
    <TodoScreen
      onRemove={removeTodo}
      goBack={() => setTodoId(null)}
      todo={selectedTodo}
      onSave={updateTodo}
    />
    :
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={(id) => setTodoId(id)}
    />

  return (
    <View >
      <Navbar title='Todo App!' />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
