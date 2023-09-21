import React, { useState, useEffect } from 'react';
import { Todoform } from './Todoform';
import { v4 as uuidv4 } from 'uuid';
import '../../App.css'
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
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='Todowrapper'>
      <h1>Set your Goals !</h1>
      <Todoform addTodo={addTodo} />
      {todos.map((todo, index) => (<Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}
