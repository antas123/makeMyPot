// src/components/Chart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {
  // Find the maximum value in the data array
  const maxValue = Math.max(...data.map(item => item.value));
  // Calculate a suitable upper bound for the Y-axis scale
  const upperBound = Math.ceil(maxValue / 10000) * 10000;

  return (
    <div className="chart">
      <h2>Investment Growth Over Time</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, upperBound]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;