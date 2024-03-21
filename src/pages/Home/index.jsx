import "./home.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "../../components/Card";
import { BarChart } from "../../components/BarChart.js";
import { useState, useEffect } from "react";
import { Data } from "../../Data";

import Donut from "../../components/DonutChart/Donut";
import Funnel from "../../components/FunnelChart/Funnel";
import PieChart from "../../components/FunnelChart/Pie";



export const Home = () => {

  const randomData = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));

  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "students",
        data: Data.map((chain) => chain.students),
        backgroundColor: [
          "#2F49D1",
          "#E13468"
        ]
      },
    ],
  });

  return (
    <div className="home">
      <div className="container">
        <div className="home_inner">
          <div className="home_left_box">
            <Sidebar />
          </div>
          <div className="home_right_box">
            <Header name="Report"/>
            <div className="home_right_box_inner">
              <Card/>
              <br/>
              <br/>
              <div className="chart-container">
              <div className="chart"><Funnel/></div>
                <div className="chart"><Donut/></div>
                
              </div>
              
              
              
              <BarChart chartData={userData} />
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
