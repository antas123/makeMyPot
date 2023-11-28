import React from 'react'
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';


const data = [
    { value: 53.7, label: 'Principal Loan amount' },
    { value: 46.3, label: 'Total interest' },
  ];
  
  const size = {
    width: 400,
    height: 250,
  };
  

const SidepieChart = () => {
    return (
        <PieChart
         margin={{ top: 0, bottom: 40, left: 0, right:0 }}
        colors={['orange', 'green']}
          series={[
            {
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 45,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
            // [`& .${chartsLegendClasses.mark}`]: {
            //   borderRadius:"50px"
            // },
          }}
          {...size}
          slotProps={{
    legend: {
      direction: 'row',
      position: { vertical: 'bottom', horizontal: 'middle' },
      padding: 0,
      labelStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      
    },
  }}
        />
      );
}

export default SidepieChart