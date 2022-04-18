import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {

  function navLinkStyle ({isActive}) {
    return{
      fontWeight : isActive ? "bold" : ""
    }
  }

  return (
    <div className='header'>
      <h1 className='heading'>Hacker News Clone</h1>
      <ul className='nav-links'>
        <li className='nav-link'><NavLink to='/top' style={navLinkStyle} className="link">TOP STORIES</NavLink></li>
        <li className='nav-link'><NavLink to='/new' style={navLinkStyle} className="link">LATEST STORIES</NavLink></li>
        <li className='nav-link'><NavLink to='/best' style={navLinkStyle} className="link">BEST STORIES</NavLink></li>
      </ul>
    </div>
  )
}

export default Header;