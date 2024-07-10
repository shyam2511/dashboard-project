import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ref, getDownloadURL } from "firebase/storage";
import { imageDb } from "../firebase/Firebase";
import axios from "axios";

function SidebarSearched({ userId }) {
  const [profileImgSrc, setProfileImgSrc] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getUserDetails = async () => {
      try {
        console.log(userId);
        const response = await axios.get(
          `https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/user/${userId}`,
          options
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, [userId]);

  useEffect(() => {
    const getProfileImg = async () => {
      if (user && user.profileImg) {
        const storageRef = ref(imageDb, `images/${user.profileImg}`);
        try {
          const url = await getDownloadURL(storageRef);
          setProfileImgSrc(url);
        } catch (error) {
          console.error("Error fetching profile image:", error);
        }
      }
    };

    getProfileImg();
  }, [user]);

  return (
    <aside id="sidebar" className="sidebar-responsive">
      <div className="sidebar-title">
        <div className="sidebar-brand">CODER'S DASHBOARD</div>
      </div>
      {user && (
        <div className="user-info">
          <div className="user-details">
            <div className="userDetailsContent">
              <img src={profileImgSrc} alt="User" className="user-photo" />
            </div>
            <div className="userDetailsContent user-name">
              {user.name} | @{user.username}
            </div>
            <div className="userDetailsContent user-bio">Bio: {user.bio}</div>
            <div className="userDetailsContent user-email">
              Email: {user.email}
            </div>
            <div className="userDetailsContent user-country">
              Country: {user.country}
            </div>
            <div className="userDetailsContent user-organization">
              Organization: {user.organization}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SidebarSearched;
