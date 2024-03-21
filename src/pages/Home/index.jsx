import "./home.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "../../components/Card";
import {  BarChart1 } from "../../components/BarChart.js";
import { useState, useEffect } from "react";
import { Data } from "../../Data";
import { LineChart1 } from "../../components/LineChart.js"; 



export const Home = () => {

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
              <BarChart1/>
              <LineChart1/>
        
           
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
