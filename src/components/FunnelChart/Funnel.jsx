import React from "react";
import Chart from "react-apexcharts";

const Funnel = () => {
  var options = {
    series: [
    {
      name: "Funnel Series",
      data: [120,100,60,20,15],
    },
  ],
    chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
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
    text: 'Deal Funnel',
    align: 'middle',
  },
  xaxis: {
    categories: [
      'Leads',
      'Sales calls',
      'Follow-up',
      'Conversion',
      'Sale',
      
    ],
  },
  legend: {
    show: false,
  },
  };

  return (
    <div className="funnel-chart">
      <Chart options={options} series={options.series} type="bar" height={350} />
    </div>
  );
};

export default Funnel;