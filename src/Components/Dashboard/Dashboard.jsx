import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data for various visualizations
  const seasonalData = [
    ['Month', 'Domestic', 'Agricultural', 'Industrial', 'Average Temperature'],
    ['Jan', 1000, 800, 400, 15],
    ['Feb', 1100, 850, 450, 18],
    ['Mar', 1200, 1200, 500, 22],
    ['Apr', 1300, 1800, 550, 25],
    ['May', 1500, 2200, 600, 28],
    ['Jun', 1800, 2500, 650, 32],
  ];

  const consumptionPatterns = [
    ['Time', 'Residential', 'Commercial', 'Peak Usage Hours'],
    ['6am', 350, 200, 400],
    ['9am', 450, 500, 600],
    ['12pm', 550, 600, 700],
    ['3pm', 500, 550, 650],
    ['6pm', 650, 400, 700],
    ['9pm', 450, 250, 500],
  ];

  const waterQualityData = [
    ['Parameter', 'Current Level', 'Standard Level', 'Critical Level'],
    ['pH Level', 7.2, 7.0, 8.5],
    ['Turbidity', 2.1, 5.0, 10.0],
    ['Chlorine', 1.5, 2.0, 4.0],
    ['Dissolved O₂', 6.8, 6.0, 4.0],
    ['Hardness', 150, 200, 300],
  ];

  const conservationImpact = [
    ['Year', 'Without Conservation', 'With Conservation', 'Savings'],
    ['2020', 1000, 800, 200],
    ['2021', 1050, 820, 230],
    ['2022', 1100, 850, 250],
    ['2023', 1150, 870, 280],
    ['2024', 1200, 900, 300],
  ];

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h1>Advanced Water Usage Analytics</h1>
        <p>Comprehensive analysis of water consumption patterns and environmental impact</p>
      </div>

      <div className="analytics-grid">
        {/* Seasonal Usage Patterns */}
        <div className="chart-card wide">
          <h2>Seasonal Usage Patterns vs Temperature</h2>
          <Chart
            width={'100%'}
            height={'400px'}
            chartType="ComboChart"
            loader={<div>Loading Chart...</div>}
            data={seasonalData}
            options={{
              title: 'Seasonal Water Usage vs Temperature',
              vAxis: { title: 'Water Usage (Kiloliters)' },
              hAxis: { title: 'Month' },
              seriesType: 'bars',
              series: {
                0: { color: '#3b82f6' },
                1: { color: '#10b981' },
                2: { color: '#6366f1' },
                3: { type: 'line', color: '#ef4444', targetAxisIndex: 1 }
              },
              vAxes: {
                0: { title: 'Water Usage (KL)' },
                1: { title: 'Temperature (°C)' }
              }
            }}
          />
        </div>

        {/* Daily Consumption Patterns */}
        <div className="chart-card wide">
          <h2>Daily Consumption Patterns</h2>
          <Chart
            width={'100%'}
            height={'400px'}
            chartType="AreaChart"
            loader={<div>Loading Chart...</div>}
            data={consumptionPatterns}
            options={{
              title: '24-Hour Usage Pattern',
              isStacked: true,
              hAxis: { title: 'Time of Day' },
              vAxis: { title: 'Usage (Liters/Hour)' },
              series: {
                0: { color: '#93c5fd' },
                1: { color: '#818cf8' },
                2: { color: '#fca5a5', lineWidth: 2, lineDashStyle: [4, 4] }
              },
              areaOpacity: 0.6
            }}
          />
        </div>

        {/* Water Quality Metrics */}
        <div className="chart-card">
          <h2>Water Quality Parameters</h2>
          <Chart
            width={'100%'}
            height={'400px'}
            chartType="BarChart"
            loader={<div>Loading Chart...</div>}
            data={waterQualityData}
            options={{
              title: 'Water Quality Metrics',
              isStacked: false,
              hAxis: { title: 'Level' },
              vAxis: { title: 'Parameters' },
              bars: 'horizontal',
              series: {
                0: { color: '#3b82f6' },
                1: { color: '#10b981' },
                2: { color: '#ef4444' }
              }
            }}
          />
        </div>

        {/* Conservation Impact */}
        <div className="chart-card">
          <h2>Conservation Impact Analysis</h2>
          <Chart
            width={'100%'}
            height={'400px'}
            chartType="CandlestickChart"
            loader={<div>Loading Chart...</div>}
            data={conservationImpact}
            options={{
              title: 'Water Conservation Impact',
              legend: 'none',
              bar: { groupWidth: '80%' },
              candlestick: {
                fallingColor: { strokeWidth: 0, fill: '#10b981' },
                risingColor: { strokeWidth: 0, fill: '#ef4444' }
              },
              vAxis: { title: 'Water Usage (KL)' }
            }}
          />
        </div>

        {/* Real-time Monitoring Stats */}
        <div className="stats-container">
          <div className="stat-card">
            <h3>Current Consumption</h3>
            <div className="stat-value">2,450 L/hr</div>
            <div className="stat-trend positive">↑ 5% from last hour</div>
          </div>
          <div className="stat-card">
            <h3>Storage Level</h3>
            <div className="stat-value">78%</div>
            <div className="stat-trend negative">↓ 2% from yesterday</div>
          </div>
          <div className="stat-card">
            <h3>Quality Index</h3>
            <div className="stat-value">92/100</div>
            <div className="stat-trend positive">↑ 3 points</div>
          </div>
          <div className="stat-card">
            <h3>System Pressure</h3>
            <div className="stat-value">4.2 bar</div>
            <div className="stat-trend stable">← Stable</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;