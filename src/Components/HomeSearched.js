import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const HomeSearched = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState({});
  const [codechefData, setCodechefData] = useState({});
  const [codeforcesData, setCodeforcesData] = useState({});

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
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserDetails();
  }, [userId]);

  useEffect(() => {
    if (user && user.platforms.leetcode) {
      fetchLeetcode(user.platforms.leetcode);
      fetchCodechef(user.platforms.codechef);
      fetchCodeforces(user.platforms.codeforces);
    }
  }, [user]);
  const fetchLeetcode = async(platform)=>{
    try {
      const response = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/leetcode/fetch-details?username=${platform.leetcode}`
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
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/codechef/fetch-details?username=${platform.codechef}`
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
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/codeforces/fetch-details?username=${platform.codeforces}`
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
      <h1>Home</h1>
      {(leetcodeData|| codechefData ||
      codeforcesData) ? (
        <div className="scores-list">
          <Doughnut data={leetcodeDataChart} />
          <div>
            <span>
              {codechefData ? (
                <>
                  Codechef Rating: {codechefData.currentRating}/
                  {codechefData.highestRating}
                </>
              ) : null}
            </span>
            <span>
              {codechefData ? `Stars: ${codechefData.stars}` : null}
            </span>
          </div>
          <div>
            <span>
              {codeforcesData ? (
                <>
                  Codeforces Rating: {codeforcesData.rating}/
                  {codeforcesData.maxRating}
                </>
              ) : null}
            </span>
            <span>
              {codeforcesData ? (
                <>
                  Title: {codeforcesData.rank}/{codeforcesData.maxRank}
                </>
              ) : null}
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
