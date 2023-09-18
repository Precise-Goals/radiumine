import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare,faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Local.css'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <p className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
        <FontAwesomeIcon className='icons' icon={faCheck} onClick={() => toggleComplete(task.id)}/> 
        <FontAwesomeIcon className='icons' icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className='icons' icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
