import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const platforms = user.platforms || {};
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [codechefData, setCodechefDataData] = useState([]);
  const [codeforcesData, setCodeforcesData] = useState([]);

  const fetchPlatformData = async () => {
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
        setCodechefDataData(codechefResponse.data.codechef);
      }
      if (leetcodeResponse.data) {
        setLeetcodeData(leetcodeResponse.data.leetcode);
      }
      if (codeforcesResponse.data) {
        setCodeforcesData(codeforcesResponse.data.codeforces);
      }
      console.log(codechefData);
      console.log(codeforcesData);
    } catch (error) {
      console.error("Error fetching platform data", error);
    }
  };

  useEffect(() => {
    fetchPlatformData();
  }, [platforms]);

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
      {platforms ? (
        <div className="scores-list">
          <div className="doughnut-container">
            {<Doughnut data={leetcodeDataChart} />}
          </div>
          {codeforcesData.rating ? (
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
          ) : (
            <div>No data for codeforces</div>
          )}
          <br />
          {
            codechefData.currentRating?(<div>
              <span>
                <b>Codechef Rating: </b>
                {codechefData.currentRating}/{codechefData.highestRating}
              </span>
              <br />
              <span>
                <b>Stars: </b> {codechefData.stars}
              </span>
            </div>):(<div>No data for codechef</div>)
          }
        </div>
      ) : (
        <div>No handles added</div>
      )}
    </div>
  );
};

export default Home;
