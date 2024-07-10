import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateUser } from "../redux/authSlice";
import "../styles/Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [profileData, setProfileData] = useState({
    name: "",
    bio: "",
    organization: "",
    country: "",
    followers: "",
    following: "",
    platforms: {
      leetcode: "",
      codeforces: "",
      codechef: "",
    },
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        bio: user.bio || "",
        organization: user.organization || "",
        country: user.country || "",
        followers: user.followers || 0,
        following: user.following || 0,
        platforms: {
          leetcode: user.platforms.leetcode || "",
          codeforces: user.platforms.codeforces || "",
          codechef: user.platforms.codechef || "",
        },
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["leetcode", "codeforces", "codechef"].includes(name)) {
      setProfileData((prevState) => ({
        ...prevState,
        platforms: {
          ...prevState.platforms,
          [name]: value,
        },
      }));
    } else {
      setProfileData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        "https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/updateProfile",
        profileData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(updateUser(response.data));
      navigate("/dashboard");
      setMessage("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile");
    }
  };

  return (
    <div className="profile-container">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2>Update Profile</h2>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Bio</label>
          <input
            type="text"
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Organization</label>
          <input
            type="text"
            name="organization"
            value={profileData.organization}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={profileData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>LeetCode Handle</label>
          <input
            type="text"
            name="leetcode"
            value={profileData.platforms.leetcode}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Codeforces Handle</label>
          <input
            type="text"
            name="codeforces"
            value={profileData.platforms.codeforces}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Codechef Handle</label>
          <input
            type="text"
            name="codechef"
            value={profileData.platforms.codechef}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Profile;
