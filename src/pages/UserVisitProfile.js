import React, { useState } from 'react'
import SidebarSearched from '../Components/SidebarSearched';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useParams } from 'react-router-dom';
import HomeSearched from '../Components/HomeSearched';
const UserVisitProfile = () => {
    const { userId } = useParams();
  return (
    <div className="grid-container">
      <Header />
      <SidebarSearched userId={userId}/>
      <HomeSearched userId={userId}/>
      <Footer />
    </div>
  );
}

export default UserVisitProfile
