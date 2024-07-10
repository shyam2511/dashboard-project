// Header.js
import React, { useState, useEffect } from "react";
import { BsPersonCircle, BsJustify, BsInfoCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";
import { imageDb } from "../firebase/Firebase";
import { getDownloadURL, ref } from "firebase/storage";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

function Header({ OpenSidebar }) {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [profileImgSrc, setProfileImgSrc] = useState("");
  const [results,setResults] = useState([]);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  useEffect(() => {
    const getProfileImg = async () => {
      const storageRef = ref(imageDb, `images/${user.profileImg}`);
      setProfileImgSrc(await getDownloadURL(storageRef));
    };
    getProfileImg();
  }, [user]);

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-options">
        <span onClick={()=>{navigate("/dashboard")}}>Home</span>
        <SearchBar setResults={setResults}/>
        {results.length>0 && <SearchResultsList results={results}/>}
        <div className="header-option">
          <BsInfoCircle className="icon" />
          <span>Contact Us</span>
        </div>
        <div className="header-option profile-icon">
          <div onClick={toggleProfileOptions}>
            <img className="icon-pp" src={profileImgSrc} />
          </div>

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
