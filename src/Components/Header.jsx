import React, { useState } from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsPeople,
  BsInfoCircle,
} from 'react-icons/bs';

function Header({ openSidebarToggle, OpenSidebar }) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');

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
        <div className='header-option'>
          <BsPersonCircle className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
