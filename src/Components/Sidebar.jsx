import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import userPhoto from './assets/user.jpg'; // Assuming you have a user photo stored in assets

const linkedin = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // Mock user data (replace with actual data or props)
  const userData = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    country: 'United States',
    organization: 'Example Corp',
    linkedin: 'https://linkedin.com/johndoe',
    bio: 'Software Engineer | Open-source enthusiast. CS from XYZ Uni',
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
          CODER DASHBOARD
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <div className="user-info">
        
        <br />
        <div className="user-details">
          <div className='userDetailsContent'><img src={userPhoto} alt="User" className="user-photo" /></div>
          <div className='userDetailsContent user-name'>{userData.name} | @{userData.username}</div>
          <div className='userDetailsContent user-bio'>{userData.bio}</div>
          {userData.email && <div className='userDetailsContent user-email'>{userData.email}</div>}
          <div className='userDetailsContent user-country'>{userData.country}</div>
          <div className='userDetailsContent user-organization'>{userData.organization}</div>
          {userData.linkedin && (
            <div className='userDetailsContent'>
              <a href={userData.linkedin} target="_blank" rel="noopener noreferrer"> 
                {linkedin}
                LinkedIn</a>
            </div>
          )}
          {/* <div className="user-bio">
            {showFullBio ? userData.bio : `${userData.bio.slice(0, 100)}... `}
            <span className="read-more" onClick={toggleBio}>
              {showFullBio ? ' Read less' : ' Read more'}
            </span>
          </div> */}
          <div className='userDetailsContent'>Followers: {userData.followers}</div>
          <div className='userDetailsContent'>Following: {userData.following}</div>
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
