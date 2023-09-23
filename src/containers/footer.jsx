import React from 'react'
import './local.css'
import '../App.css'
import { Link } from 'react-scroll';
import top from '../assets/up.png'

const menuLinks = [
    { to: 'time', text: 'Pomodoro', offset: -100 },
    { to: 'nav', text: 'Todo', offset: -25 },
];

const footer = () => {
    return (
        <div className='footera' id='down'>
            <div className="footwrap">
                <div className="leftcul">
                    <div className="logo">
                        <div className="circles">
                            <div className="kid1"></div>
                            <div className="kid2"></div>
                        </div>
                        <div className="name">Radium </div>
                    </div>
                    <p>Radium is the essential study app for students, offering a captivating UI, versatile features, and themes. With built-in to-do lists, focused timer functionality, and more, it's the ideal tool to elevate your study sessions.</p>
                    <p className='details'>
                        Instagram :<a href="https://www.instagram.com/precisegoals.in/"> precisegoals.in</a><br />Official Site : <a href="https://precisegoals.pages.dev">Precise Goals</a><br /> Email Id : elitesarthakamr@gmail.com
                    </p>
                </div>
                <div className="rightcul">
                    <div className="links">
                        <ul className="foot-links">
                            {menuLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={link.offset}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href="https://precisegoals.pages.dev/">About Us</a>
                            </li>
                        </ul>
                        <div className="embed"></div>
                    </div>
                </div>
            </div>
            <div className="downcul">Copyright© 2023 - Sarthak Patil all Rights Preserved</div>
            <div className="topbutton"><Link to="nav" smooth={true} duration={500} offset={-25}><img src={top} alt="top" /></Link>
            </div>
        </div>
    )
}

export default footer
