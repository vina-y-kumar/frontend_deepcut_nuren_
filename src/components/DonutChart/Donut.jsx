// import React from 'react';
import { Chart } from 'react-google-charts';

const DonutChart = () => {
  const data = [
    ['Stage', 'Count'],
    ['Leads', 120],
    ['Proposals', 100],
    ['Negotiation', 60],
    ['Contracts sent', 20],
    ['Won', 20],
    ['Lost', 20],
  ];

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Opprotunity Stage</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          title: 'Opportunity Stage',
          pieHole: 0.4,
        }}
      />
    </div>
  );
};

export default DonutChart;
