import React, { useState } from 'react'
import '../../App.css'

export const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const handlesubmit = e => {
    e.preventDefault();
    addTodo(value)
    setValue("")
  }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
      <label htmlFor="todoInput"></label>
      <input
        type="text"
        required
        autocomplete="off"
        placeholder="ㅤ"
        className="input-todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="todoInput" 
      />
      <button type='submit' className='input-todo-button'>Add Task</button>
    </form>
  )
}
