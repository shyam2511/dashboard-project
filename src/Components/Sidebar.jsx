import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import userPhoto from './assets/user.jpg'; // Assuming you have a user photo stored in assets

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // Mock user data (replace with actual data or props)
  const userData = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    country: 'United States',
    organization: 'Example Corp',
    linkedin: 'https://linkedin.com/johndoe',
    bio: 'Software Engineer | Open-source enthusiast. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum odio sed arcu fermentum, vitae sollicitudin quam pretium. Suspendisse id elit id neque bibendum lobortis. Duis suscipit mi ut dui pretium, id sollicitudin sapien fermentum.',
    followers: 100,
    following: 50,
  };

  const [showFullBio, setShowFullBio] = useState(false);

  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> CODER DASHBOARD
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <div className="user-info">
        <img src={userPhoto} alt="User" className="user-photo" />
        <br />
        <div className="user-details">
          <div>{userData.name}</div>
          <div>@{userData.username}</div>
          {userData.email && <div>{userData.email}</div>}
          <div>{userData.country}</div>
          <div>{userData.organization}</div>
          {userData.linkedin && (
            <div>
              <a href={userData.linkedin} target="_blank" rel="noopener noreferrer">Profile</a>
            </div>
          )}
          {/* <div className="user-bio">
            {showFullBio ? userData.bio : `${userData.bio.slice(0, 100)}... `}
            <span className="read-more" onClick={toggleBio}>
              {showFullBio ? ' Read less' : ' Read more'}
            </span>
          </div> */}
          <div>Followers: {userData.followers}</div>
          <div>Following: {userData.following}</div>
        </div>
      </div>

      {/* Uncomment below to add sidebar menu items */}
      {/* <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Categories
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Setting
          </a>
        </li>
      </ul> */}
    </aside>
  );
}

export default Sidebar;
