
import React, { Component } from "react";
import Chart from "react-apexcharts";
import "./chart.css"
export class BarChart1 extends Component {
  constructor(props) {
    super(props);



    this.state = {
      optionsMixedChart: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "50%"
          }
        },
        stroke: {
          width: [4, 0, 0]
        },
        xaxis: {
          categories: ["sep 01", "sep 02", "sep 03", "sep 04", "sep 05", "sep 06", "sep 07"]
        },

        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 50000
        }
      },
      seriesMixedChart: [
        {
          name: "series-1",
          type: "column",
          data: [38000, 42000, 35000, 18000, 5000, 49000, 25000, 45000]
        },
        {
          name: "series-2",
          type: "column",
          data: [42000, 45000, 25000, 19000, 8000, 25000, 10000, 48000]
        }
      ]
    };
  }


  render() {
    return (
      
      <div className="app">
        <div className="row">
          <div className="col mixed-chart">
            <h1>Revenue vs Lead</h1>
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="500"
            />
          </div>
        </div>

      </div>
    );
  }
}

// export default BarChart;
