import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>Micro<span>Blog</span></h1>
          </div>
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/new" className={({ isActive }) => isActive ? 'active btn-primary' : 'btn-primary'}>
              New Post
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;