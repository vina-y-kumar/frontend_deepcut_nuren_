import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = () => {
  const data = [
    ['Stage', 'Count'],
    ['Leads', 120],
    ['Sales Calls', 100],
    ['Follow-up', 60],
    ['Conversion', 20],
    ['Sale', 20],
  ];

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Deal Funnel</h2>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={{
          title: 'Deal Funnel',
        }}
      />
    </div>
  );
};

export default PieChart;
