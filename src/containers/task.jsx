import React from 'react'
import './local.css'
import { Todowrapper } from '../components/Todo/todowrapper'
import homelogo from '../assets/4c4354109d557b6124a686775b94d7b6.png'
const Task = () => {
    return (
        <div id='task' className='task'>
            <div className="headquote">Make Study Fun !</div>
            <div className="tasklay">
                <div className="image"><img src={homelogo} alt="homelogo" /></div>
                <Todowrapper />
            </div>
        </div>
    )
}

export default Task
