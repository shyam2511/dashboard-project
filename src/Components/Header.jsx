import React, { useState } from 'react';
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsInfoCircle,
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-options'>
        <div className='header-option'>
          <BsSearch className='icon' />
          <span>Search Users</span>
        </div>
        <div className='header-option'>
          <BsInfoCircle className='icon' />
          <span>Contact Us</span>
        </div>
        <div className='profile-icon' onClick={toggleProfileOptions}>
          <BsPersonCircle className='icon' />
          <div className={`profile-dropdown ${showProfileOptions ? 'active' : ''}`}>
            <ul>
              <li><a href='#'>View Profile</a></li>
              <li><a href='#'>Edit Profile</a></li>
              <li><a href='#'>Log Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
