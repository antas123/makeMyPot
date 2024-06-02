import React, { useState } from 'react';
import './App.css';
import Result from './Result';
import Chart from './Chart';
import InputForm from './InputForm';

function Sip() {
  const [futureValue, setFutureValue] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  const [chartData, setChartData] = useState([]);

  const calculateSIP = (monthlyInvestment, expectedReturnRate, timePeriod) => {
    const monthlyRate = expectedReturnRate / 100 / 12;
    const months = timePeriod * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const totalInvested = monthlyInvestment * months;
    const totalReturns = futureValue - totalInvested;

    setFutureValue(futureValue.toFixed(2));
    setTotalInvested(totalInvested.toFixed(2));
    setTotalReturns(totalReturns.toFixed(2));

    const data = Array.from({ length: timePeriod }, (_, i) => ({
      year: i + 1,
      value: (monthlyInvestment * ((Math.pow(1 + monthlyRate, (i + 1) * 12) - 1) / monthlyRate) * (1 + monthlyRate)).toFixed(2),
    }));
    setChartData(data);
  };

  const calculateLumpSum = (oneTimeInvestment, expectedReturnRate, timePeriod) => {
    const annualRate = expectedReturnRate / 100;
    const futureValue = oneTimeInvestment * Math.pow(1 + annualRate, timePeriod);
    const totalInvested = oneTimeInvestment;
    const totalReturns = futureValue - totalInvested;

    setFutureValue(futureValue.toFixed(2));
    setTotalInvested(totalInvested.toFixed(2));
    setTotalReturns(totalReturns.toFixed(2));

    const data = Array.from({ length: timePeriod }, (_, i) => ({
      year: i + 1,
      value: (oneTimeInvestment * Math.pow(1 + annualRate, i + 1)).toFixed(2),
    }));
    setChartData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SIP Calculator</h1>
      </header>
      <main>
        <InputForm calculateSIP={calculateSIP} calculateLumpSum={calculateLumpSum} />
        <Result futureValue={futureValue} totalInvested={totalInvested} totalReturns={totalReturns} />
        <Chart data={chartData} />
      </main>
    </div>
  );
}

export default Sip;