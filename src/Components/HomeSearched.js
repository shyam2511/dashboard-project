import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const HomeSearched = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [codechefData, setCodechefData] = useState([]);
  const [codeforcesData, setCodeforcesData] = useState([]);
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
    if (user && user.platforms) {
      fetchPlatformData(user.platforms);
    }
  }, [user]);

  const fetchPlatformData = async (platforms) => {
    try {
      const codechefResponse = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/codechef/fetch-details?username=${platforms.codechef}`
      );
      const codeforcesResponse = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/codeforces/fetch-details?username=${platforms.codeforces}`
      );
      const leetcodeResponse = await axios.get(
        `https://coders-dashboard-4cdb4394fb85.herokuapp.com/leetcode/fetch-details?username=${platforms.leetcode}`
      );

      if (codechefResponse.data) {
        setCodechefData(codechefResponse.data.codechef);
      }
      if (leetcodeResponse.data) {
        setLeetcodeData(leetcodeResponse.data.leetcode);
      }
      if (codeforcesResponse.data) {
        setCodeforcesData(codeforcesResponse.data.codeforces);
      }
    } catch (error) {
      console.error("Error fetching platform data", error);
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
      <div className="scores-list">
        {/* <Doughnut data={leetcodeDataChart} /> */}
        <div>
          <span>
            {codechefData.currentRating ? (
              <>
                Codechef Rating: {codechefData.currentRating}/
                {codechefData.highestRating}
              </>
            ) : null}
          </span>
          <span>{codechefData.stars ? `Stars: ${codechefData.stars}` : null}</span>
        </div>
        <div>
          <span>
            {codeforcesData.rating ? (
              <>
                Codeforces Rating: {codeforcesData.rating}/
                {codeforcesData.maxRating}
              </>
            ) : null}
          </span>
          <span>
            {codeforcesData.rank ? (
              <>
                Title: {codeforcesData.rank}/{codeforcesData.maxRank}
              </>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSearched;
