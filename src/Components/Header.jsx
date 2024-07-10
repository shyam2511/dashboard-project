import React, { useState, useEffect, useRef } from "react";
import {
  BsPersonCircle,
  BsSearch,
  BsJustify,
  BsInfoCircle,

} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authSlice';
import { imageDb } from '../firebase/Firebase';
import { getDownloadURL, ref } from 'firebase/storage';

function Header({ OpenSidebar }) {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const searchFormRef = useRef(null); // Reference for the search form
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=>(state.auth));
  const [profileImgSrc, setProfileImgSrc] = useState("");
  
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  // Close search bar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchFormRef.current &&
        !searchFormRef.current.contains(event.target)
      ) {
        setIsSearching(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchFormRef]);
  console.log(user);
  useEffect(()=>{
    const getProfileImg=async()=>{
      const storageRef = ref(imageDb, `images/${user.profileImg}`);
      setProfileImgSrc(await getDownloadURL(storageRef));
    }
    getProfileImg();
  },[user])
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-options">
        {isSearching ? (
          <form
            onSubmit={handleSearchSubmit}
            className="search-form"
            ref={searchFormRef}
          >
            <input
              type="text"
              placeholder="Enter the name of user"
              value={searchText}
              onChange={handleInputChange}
              className="search-input"
            />
          </form>
        ) : (
          <div className="header-option" onClick={handleSearchClick}>
            <BsSearch className="icon" />
            <span>Search Users</span>
          </div>
        )}
        <div className="header-option">
          <BsInfoCircle className="icon" />
          <span>Contact Us</span>
        </div>
        <div className="header-option profile-icon">

          <img
            className="icon"
            src={profileImgSrc}
            onClick={toggleProfileOptions}
          />

          {/* Profile Dropdown */}
          <div
            className={`profile-dropdown ${showProfileOptions ? "active" : ""}`}
          >
            <ul>

              <li
                onClick={() => {
                  navigate("/profile");
                }}
              >

                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li
                onClick={() => {
                  handleLogout();
                }}
              >
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
