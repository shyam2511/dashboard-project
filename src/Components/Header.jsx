import React from 'react';
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
        <div className='header-option'>
          <BsPersonCircle className='icon' />
        </div>
      </div>
    </header>
  );
}

export default Header;
