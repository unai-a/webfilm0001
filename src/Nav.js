import React, {useState, useEffect} from 'react';
import './Nav.css';


function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        //handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll',null);
    };
  }, []);
    


  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <img 
        className="nav__logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/3/34/Red_star.svg" 
        alt="Logo"></img>
        <a href="https://ublockorigin.com/">
        <img 
        className="nav__avatar" 
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" 
        alt="Logo"></img>
        </a>
    </div>
  )
}

export default Nav
