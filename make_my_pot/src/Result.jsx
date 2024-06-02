// src/components/Results.js
import React from 'react';
import './Result.css';

const Results = ({ futureValue, totalInvested, totalReturns }) => {
  return (
    <div className="results">
      <h2>Results</h2>
      <div className="result-item">
        <span>Total Invested:</span>
        <span>{totalInvested}</span>
      </div>
      <div className="result-item">
        <span>Future Value:</span>
        <span>{futureValue}</span>
      </div>
      <div className="result-item">
        <span>Total Returns:</span>
        <span>{totalReturns}</span>
      </div>
    </div>
  );
};

export default Results;