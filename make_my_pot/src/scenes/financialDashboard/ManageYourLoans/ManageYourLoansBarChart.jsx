import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [3000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000,8000];
const pData = [1200,2000,2200,2500,2700,3100,3500,3900,4100,4500,4900,5500,5800,5900,6000,6300,6500,6600,7000,7100,7500];


const xRightLabels = [
    '2021',
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
    '2036',
    '2037',
    '2038',
    '2039',
    '2040',
    '2041',
  ];

 function ManageYourLoansBarChart() {
  return (
    <BarChart
    colors={['green','orange']}
      width={600}
      height={300}
      series={[
        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band', }]}
      rightAxis={[{ data: xRightLabels }]}
      
    />
  );
}

export default ManageYourLoansBarChart