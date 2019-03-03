import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => {
  return (
    <nav className="navigation">
      <NavLink exact to={`/`} activeClassName="active-nav">
        <p>Home</p>
      </NavLink>

      <NavLink to={`/friend-form`} activeClassName="active-nav">
        <p>Add Friend</p>
      </NavLink>
    </nav>
  )
}

export default Navigation;
