// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {/* <li className="nav-item">
          <Link to="/" className="nav-link">User</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/Adminlogin"><a href="#" className="nav-link">Admin Login</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;