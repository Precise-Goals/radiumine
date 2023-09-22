import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './local.css';
import '../App.css';

const themes = [
  "pacific",
  "strawberry",
  "dark",
  "obsidian",
  "lavender",
  "Magenda",
  "carbon",
  "chocolate",
];

const menuLinks = [
  { to: 'time', text: 'Pomodoro', offset: -100 },
  { to: 'top', text: 'Todo', offset: -25 },
];

const Navbar = ({ changeSectionClassName }) => {
  const [theme, setTheme] = useState("pacific");
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && themes.includes(storedTheme)) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    // Save the theme to local storage
    localStorage.setItem('theme', nextTheme);

    setTheme(nextTheme);
    changeSectionClassName(nextTheme);

    // Display the notification for 3 seconds
    setNotification(nextTheme);
    // setTimeout(() => {
    //   setNotification(null);
    // }, 3000);
  };

  useEffect(() => {
    changeSectionClassName(theme);
  }, [theme, changeSectionClassName]);
  const Notification = ({ theme }) => {
    return (
      <div className="notification">
        {theme} Theme
      </div>
    );
  };
  return (
    <nav className="nav">
      <div className="overlay">
        <div className="bar">
          <div className="logo">
            <div className="circles">
              <div className="kid1"></div>
              <div className="kid2"></div>
            </div>
            <div className="name">Radium </div>
          </div>
          <ul className="nav-links">
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
            <div className="themesbutton">
              <a href="/" onClick={(e) => { e.preventDefault(); toggleTheme(); }}>
                Switch Theme
              </a>
            </div>
          </ul>
        </div>
      </div>
      <p>{notification && <Notification theme={notification} />}</p>
    </nav>
  );
};



export default Navbar;
 