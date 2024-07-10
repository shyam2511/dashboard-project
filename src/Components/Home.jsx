import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Home = () => {
  // Sample initial state for scores
  const [scores, setScores] = useState([
    { website: 'Leetcode', score: 1487 },
    { website: 'Codeforces', score: 1500 },
    { website: 'HackerRank', score: 1794 },
  ]);

  // You can fetch data from an API or adjust the scores as needed
  useEffect(() => {
    // Example of fetching scores from an API
    // Replace with your actual fetch logic
    // fetchScores()
    //   .then(data => setScores(data))
    //   .catch(error => console.error('Error fetching scores:', error));
  }, []);

  const chartData = {
    labels: scores.map(item => item.website),
    datasets: [{
      label: 'Scores',
      data: scores.map(item => item.score),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
      barThickness: 25, // Adjust the thickness of the bars
    }],
  };

  return (
    <div className="main-content">
      <h1>Home</h1>
      <div className="scores-list">
        <h2>Scores from Different Websites</h2>
        <ul>
          {scores.map((item, index) => (
            <li key={index}>
              <strong>{item.website}:</strong> {item.score}
            </li>
          ))}
        </ul>
      </div>
      <div className="bar-chart-wrapper" style={{ width: '80%', margin: '0 auto' }}>
        <Bar
          data={chartData}
          options={{
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                },
              }],
            },
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}></div> {/* Adjust margin as needed */}
    </div>
  );
}

export default Home;
