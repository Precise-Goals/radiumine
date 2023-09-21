import React , {useState} from 'react'
import '../../App.css'

export const Todoform = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handlesubmit = e =>{
      e.preventDefault();
      addTodo(value)
      setValue("")
    }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
      <input type='text'required placeholder='' className='input-todo' value={value} onChange={(e)=> setValue(e.target.value)} />
      <button type='submit' className='input-todo-button'>Add Task</button>
    </form>
  )
}
