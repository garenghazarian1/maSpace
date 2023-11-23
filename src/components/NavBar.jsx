import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../login/Login';

// Style
const nav = "flex items-center justify-between mx-auto mt-1 mb-1 ml-4 mr-4 gap-2 bg-gradient-to-r from-indigo-500/25 to-black/25 p-2 rounded-lg shadow-lg w-full md:w-";

const logoImage = (
  <img 
    src="/img/logo.png" 
    alt="Logo" 
    className="w-16 h-16 mr-4 m-4 rounded-full shadow-lg shadow-neutral-600 transition-transform duration-300 hover:scale-110" 
  />
);

const linkStyle = isActive => 
  `text-gray-300 hover:bg-blue-700/75 hover:text-white p-2 rounded-md ${isActive ? 'text-white bg-blue-700/50 shadow-cyan-500/50' : ''}`;

 

// End style

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const HamburgerIcon = (
    <button 
      className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-700"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  );
  return (
    <nav className={nav}>
      <div className="flex items-center">
        {logoImage}
        {HamburgerIcon}
        <ul className={`flex flex-col md:flex-row items-center ${isMenuOpen ? 'block' : 'hidden md:flex'}`}>
          <li className="m-2">
            <NavLink to="/" className={({ isActive }) => linkStyle(isActive)}>
              MySpace
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink to="/apps" className={({ isActive }) => linkStyle(isActive)}>
              Apps
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink to="/todolist" className={({ isActive }) => linkStyle(isActive)}>
              To do list
            </NavLink>
          </li>
          <li className="m-2">
            <NavLink to="/eshop" className={({ isActive }) => linkStyle(isActive)}>
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <Login/>
      </div>
    </nav>
  );
}
