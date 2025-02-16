// WaterUsageSurvey.jsx
import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import './Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    purpose: '',
    usage: '',
    frequency: '',
    location: '',
    conservation: false
  });

  const [submissions, setSubmissions] = useState([
    ['Purpose', 'Number of Users'],
    ['Domestic', 45],
    ['Agriculture', 30],
    ['Industrial', 15],
    ['Commercial', 10]
  ]);

  const [usageData, setUsageData] = useState([
    ['Usage Level', 'Number of Users'],
    ['0-1000L', 20],
    ['1000-5000L', 35],
    ['5000-10000L', 25],
    ['10000L+', 20]
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, you would:
    // 1. Send data to backend
    // 2. Update charts with new data from backend
    // 3. Reset form
    
    setFormData({
      purpose: '',
      usage: '',
      frequency: '',
      location: '',
      conservation: false
    });

    alert('Survey submitted successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="survey-container">
      <div className="survey-header">
        <h1>Water Usage Survey</h1>
        <p>Help us understand your water usage patterns to better serve your needs</p>
      </div>

      <div className="survey-content">
        <div className="survey-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="purpose">Primary Purpose of Water Usage:</label>
              <select 
                id="purpose" 
                name="purpose" 
                value={formData.purpose}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Purpose</option>
                <option value="domestic">Domestic Use</option>
                <option value="agriculture">Agriculture</option>
                <option value="industrial">Industrial</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="usage">Average Monthly Water Usage (Liters):</label>
              <select 
                id="usage" 
                name="usage" 
                value={formData.usage}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Usage Range</option>
                <option value="0-1000">0-1000L</option>
                <option value="1000-5000">1000-5000L</option>
                <option value="5000-10000">5000-10000L</option>
                <option value="10000+">10000L+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="frequency">Usage Frequency:</label>
              <select 
                id="frequency" 
                name="frequency" 
                value={formData.frequency}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Frequency</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="seasonal">Seasonal</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location/Region:</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="Enter your region"
              />
            </div>

            <div className="form-group checkbox">
              <label>
                <input 
                  type="checkbox" 
                  name="conservation" 
                  checked={formData.conservation}
                  onChange={handleInputChange}
                />
                I am interested in water conservation methods
              </label>
            </div>

            <button type="submit" className="submit-button">Submit Survey</button>
          </form>
        </div>

        <div className="survey-analytics">
          <div className="chart-container">
            <h2>Water Usage by Purpose</h2>
            <Chart
              width={'100%'}
              height={'300px'}
              chartType="PieChart"
              loader={<div>Loading Chart...</div>}
              data={submissions}
              options={{
                title: 'Distribution of Water Usage Purposes',
                pieHole: 0.4,
                colors: ['#3b82f6', '#10b981', '#6366f1', '#f59e0b'],
                legend: { position: 'bottom' }
              }}
            />
          </div>

          <div className="chart-container">
            <h2>Monthly Usage Distribution</h2>
            <Chart
              width={'100%'}
              height={'300px'}
              chartType="ColumnChart"
              loader={<div>Loading Chart...</div>}
              data={usageData}
              options={{
                title: 'Water Usage Distribution',
                colors: ['#3b82f6'],
                legend: { position: 'none' },
                hAxis: {
                  title: 'Usage Range',
                },
                vAxis: {
                  title: 'Number of Users',
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;