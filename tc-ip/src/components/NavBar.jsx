import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaSearch } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className="bg-slate-300 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/resources">Recruiters</Link> {/* Link to Resources component */}
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/placement-statistics">Calendar</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/events">Events</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer text-gray-900 text-lg">
            <Link to="/about">About</Link>
          </li>
        </ul>

        {/* Search Icon and Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <FaSearch className="text-black w-5 h-5 cursor-pointer hover:text-gray-500" />

          {/* Auth Buttons */}
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Login
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu (Optional for later) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
