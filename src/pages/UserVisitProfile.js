import React, { useState, useEffect } from "react";
import SidebarSearched from "../Components/SidebarSearched";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import HomeSearched from "../Components/HomeSearched";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserVisitProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const getUserDetails = async () => {
      try {
        const response = await axios.get(
          `https://coders-dashboard-4cdb4394fb85.herokuapp.com/auth/user/${userId}`,
          options
        );
        setUser(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-container">
      <Header />
      {user && <SidebarSearched user={user} />}
      {user && <HomeSearched user={user} />}
      <Footer />
    </div>
  );
};

export default UserVisitProfile;
