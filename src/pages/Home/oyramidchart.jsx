import React from "react";
import Chart from "react-apexcharts";

const PyramidChart = () => {
  var options = {
    series: [
    {
      name: "Funnel Series",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ],
    chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
    },
    dropShadow: {
      enabled: true,
    },
  },
  title: {
    text: 'Recruitment Funnel',
    align: 'middle',
  },
  xaxis: {
    categories: [
      'Sourced',
      'Screened',
      'Assessed',
      'HR Interview',
      'Technical',
      'Verify',
      'Offered',
      'Hired',
    ],
  },
  legend: {
    show: false,
  },
  };

  return (
    <div className="pyramid-chart">
      <Chart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
};

export default PyramidChart;
