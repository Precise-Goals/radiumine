import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './local.css';
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDragon , faHollyBerry,faShieldCat,faIceCream ,faCookie,faSpa,faMoon,faPlantWilt,faEarthAsia, faBridgeWater, faFireFlameSimple} from '@fortawesome/free-solid-svg-icons';

const themes = [
  "Pacific",
  "Strawberry",
  "Dark",
  "Obsidian",
  "Lavender",
  "Magenta",
  "Cream",
  "Carbon",
  "Bush",
  "Fantasy",
  "Chocolate",
];


const menuLinks = [
  { to: 'time', text: 'Pomodoro', offset: 0 },
  { to: 'root', text: 'Todo', offset: -25 },
  { to: 'down', text: 'Socials', offset: -25 },
];

const Navbar = ({ changeSectionClassName }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme && themes.includes(storedTheme) ? storedTheme : "Pacific";
  });
  const [notification, setNotification] = useState(theme);
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && themes.includes(storedTheme)) {
      setTheme(storedTheme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    localStorage.setItem('theme', nextTheme);
    setTheme(nextTheme);
    changeSectionClassName(nextTheme);
    setNotification(nextTheme);
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
    <nav className="nav" id='nav'>
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
            <li className='lis'>
              <div className="themesbutton">
                <a href="/" className='switch' onClick={(e) => { e.preventDefault(); toggleTheme(); }}>
                  Themes
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p>{notification && <Notification theme={notification} />}</p>
    </nav>
  );
};



export default Navbar;
