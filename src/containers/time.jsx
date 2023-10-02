import React from 'react'
import '../App.css'
import pomo from '../assets/pomo.png'
import Maintimer from '../components/Timer/maintimer'
import './local.css'




const time = () => {

    return (
        <div id='time'>
            <h1 className='headquote'>Pomodoro Method !</h1>
            <div className="overlayys">
                <div className="Pomo">
                    <h1>Focus On Timer !</h1>
                    <div className="progressbar">
                        <Maintimer />
                    </div>
                </div>
                <div className="pomo">
                    <img src={pomo} className='pomo' alt="pomodorotimer" loading='lazy' />
                </div>
            </div>
        </div>
    )
}

export default time
