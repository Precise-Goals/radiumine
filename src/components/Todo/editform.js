import React , {useState} from 'react'
import './Local.css'

export const Editform = ({editTodo,task}) => {
    const [value, setValue] = useState(task.task)
    const handlesubmit = e =>{
      e.preventDefault();
      editTodo(value,task.id)
      setValue("")
    }
  return (
    <form className='Todoform' onSubmit={handlesubmit}>
      <input type='text'required placeholder='Update Tasks . . . . ' className='input-todo' value={value} onChange={(e)=> setValue(e.target.value)} />
      <button type='submit' className='input-todo-button'>Update</button>
    </form>
  )
}
