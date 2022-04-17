import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='heading'>Hacker News Clone</h1>
      <ul className='nav-links'>
        <li className='nav-link'><Link to='/top' className='link'>TOP STORIES</Link></li>
        <li className='nav-link'><Link to='/new' className='link'>LATEST STORIES</Link></li>
        <li className='nav-link'><Link to='/best' className='link'>BEST STORIES</Link></li>
      </ul>
    </div>
  )
}

export default Header;