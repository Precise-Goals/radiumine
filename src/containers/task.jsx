import React from 'react'
import './local.css'
import { Todowrapper } from '../components/Todo/todowrapper'
import homelogo from '../assets/home.webp'
const Task = () => {
    return (
        <div id='task' className='task'>
            <div className="headquote">Make Study Fun !</div>
            <div className="tasklay">
                <div className="image"><div className="image">
                    <img src={homelogo} alt="homelogo" loading='lazy' width="300" height="150" />
                </div>
                </div>
                <Todowrapper />
            </div>
        </div>
    )
}

export default Task
