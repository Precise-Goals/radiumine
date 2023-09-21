import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'
export const Todo = ({task, deleteTodo, toggleComplete}) => {
 
  return (
    <div className="Todo">
        <div className='layo'>
        <FontAwesomeIcon className='icons' icon={faCheck} onClick={() => toggleComplete(task.id)}/> 
        <p className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        </div>
        <FontAwesomeIcon className='icons' icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  )
}
