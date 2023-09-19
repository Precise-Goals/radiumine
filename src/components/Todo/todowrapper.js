import React, { useState, useEffect } from 'react';
import { Todoform } from './Todoform';
import { v4 as uuidv4 } from 'uuid';
import './Local.css';
import { Editform } from './editform';
import { Todo } from './todo';
uuidv4();
const getlocaldata = () => {
  let list = localStorage.getItem('todos')
  if (list) {
    return JSON.parse(localStorage.getItem('todos'));

  } else {
    return [];
  }
}
export const Todowrapper = () => {
  const [todos, setTodos] = useState(getlocaldata())
  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(todos)
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
  }
  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
  }
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='Todowrapper'>
      <h1>Set your Goals !</h1>
      <div className='Circlesvg kid1'></div>
      <Todoform addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ?
          (<Editform editTodo={editTask} task={todo} />) :
          (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
      ))}
      <div className='Circlesvg kid2'></div>
    </div>
  )
}
