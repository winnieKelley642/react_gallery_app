import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <div className = 'main-nav'>
      <ul>
        <li><NavLink to='/stars'>stars</NavLink></li>
        <li><NavLink to='/legos'>legos</NavLink></li>
        <li><NavLink to='/candy'>candy</NavLink></li>
      </ul>
  </div>
)

export default Nav;