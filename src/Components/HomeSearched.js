import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const HomeSearched = ({ user }) => {
  const [leetcodeData, setLeetcodeData] = useState({});
  const [codechefData, setCodechefData] = useState({});
  const [codeforcesData, setCodeforcesData] = useState({});
  useEffect(() => {
    if (user.platforms.leetcode) {
      fetchLeetcode(user.platforms.leetcode);
    }
    if (user && user.platforms.codechef) {
      fetchCodechef(user.platforms.codechef);
    }
    if (user && user.platforms.codeforces) {
      fetchCodeforces(user.platforms.codeforces);
    }
  }, [user]);
  const fetchLeetcode = async(platform)=>{
    try {
      const response = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/leetcode/fetch-details?username=${platform}`
      );
      if (response.data) {
        setLeetcodeData(response.data.leetcode);
      }
    } catch (error) {
       console.error("Error fetching Leetcode data", error);
    }
    
  }
  const fetchCodechef = async (platform) => {
    try {
      const response = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/codechef/fetch-details?username=${platform}`
      );
      
      if (response.data) {
        setCodechefData(response.data.codechef);
      }
    } catch (error) {
      console.error("Error fetching Codechef data", error);
    }
  };
  const fetchCodeforces = async (platform) => {
    try {
      const response = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/codeforces/fetch-details?username=${platform}`
      );
      if (response.data) {
        setCodeforcesData(response.data.codeforces);
      }
    } catch (error) {
      console.error("Error fetching Codeforces data", error);
    }
  };

  const leetcodeDataChart = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "Leetcode questions solved",
        data: [
          leetcodeData.easySolved || 0,
          leetcodeData.mediumSolved || 0,
          leetcodeData.hardSolved || 0,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="main-content">
      <h1>Profile</h1>
      {leetcodeData || codechefData || codeforcesData ? (
        <div className="scores-list">
          <div className="doughnut-container">
            {<Doughnut data={leetcodeDataChart} />}
          </div>
          <div>
            <span>
              <b>Codeforces Rating: </b>
              {codeforcesData.rating}/{codeforcesData.maxRating}
            </span>
            <br />
            <span>
              <b>Title: </b> {codeforcesData.rank}/{codeforcesData.maxRank}
            </span>
          </div>
          <br />
          <div>
            <span>
              <b>Codechef Rating: </b>
              {codechefData.currentRating}/{codechefData.highestRating}
            </span>
            <br />
            <span>
              <b>Stars: </b> {codechefData.stars}
            </span>
          </div>
        </div>
      ) : (
        <div>Not visible</div>
      )}
    </div>
  );
};

export default HomeSearched;
