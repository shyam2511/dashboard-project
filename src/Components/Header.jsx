// Header.jsx

import React, { useState } from 'react';
import {
  BsSearch,
  BsJustify,
  BsInfoCircle,
  BsPersonCircle,
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showProfileOptions, setShowProfileOptions] = useState(false); // State for profile dropdown

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here with searchText
    console.log('Searching for:', searchText);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-options'>
        {isSearching ? (
          <form onSubmit={handleSearchSubmit} className='search-form'>
            <input
              type='text'
              placeholder='Enter the name of user'
              value={searchText}
              onChange={handleInputChange}
              className='search-input'
            />
          </form>
        ) : (
          <div className='header-option' onClick={handleSearchClick}>
            <BsSearch className='icon' />
            <span>Search Users</span>
          </div>
        )}
        <div className='header-option'>
          <BsInfoCircle className='icon' />
          <span>Contact Us</span>
        </div>
        <div className='header-option profile-icon'>
          <BsPersonCircle className='icon' onClick={toggleProfileOptions} />
          {/* Profile Dropdown */}
          <div className={`profile-dropdown ${showProfileOptions ? 'active' : ''}`}>
            <ul>
              <li><a href='http://localhost:3000'>Profile</a></li>
              <li><a href='http://localhost:3000'>Settings</a></li>
              <li><a href='http://localhost:3000'>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
