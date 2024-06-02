// src/components/InputForm.js
import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ calculateSIP, calculateLumpSum }) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [oneTimeInvestment, setOneTimeInvestment] = useState('');
  const [expectedReturnRate, setExpectedReturnRate] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const handleSIPSubmit = (e) => {
    e.preventDefault();
    calculateSIP(parseFloat(monthlyInvestment), parseFloat(expectedReturnRate), parseFloat(timePeriod));
  };

  const handleLumpSumSubmit = (e) => {
    e.preventDefault();
    calculateLumpSum(parseFloat(oneTimeInvestment), parseFloat(expectedReturnRate), parseFloat(timePeriod));
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSIPSubmit}>
        <h2>SIP Investment</h2>
        <label>
          Monthly Investment:
          <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} required />
        </label>
        <label>
          Expected Return Rate (%):
          <input type="number" value={expectedReturnRate} onChange={(e) => setExpectedReturnRate(e.target.value)} required />
        </label>
        <label>
          Time Period (years):
          <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} required />
        </label>
        <button type="submit">Calculate SIP</button>
      </form>
      <form onSubmit={handleLumpSumSubmit}>
        <h2>One-Time Investment</h2>
        <label>
          One-Time Investment:
          <input type="number" value={oneTimeInvestment} onChange={(e) => setOneTimeInvestment(e.target.value)} required />
        </label>
        <label>
          Expected Return Rate (%):
          <input type="number" value={expectedReturnRate} onChange={(e) => setExpectedReturnRate(e.target.value)} required />
        </label>
        <label>
          Time Period (years):
          <input type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} required />
        </label>
        <button type="submit">Calculate Lump Sum</button>
      </form>
    </div>
  );
};

export default InputForm;