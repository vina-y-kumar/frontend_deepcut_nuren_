import "./home.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Card } from "../../components/Card";
import { BarChart } from "../../components/BarChart.js";
import { useState, useEffect } from "react";
import { Data } from "../../Data";
import PyramidChart from "./oyramidchart.jsx" // Import the PyramidChart component

export const Home = () => {
  const [userData, setUserData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: "students",
        data: Data.map((chain) => chain.students),
        backgroundColor: ["#2F49D1", "#E13468"],
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
            <Header name="Dashboard" />
            <div className="home_right_box_inner">
              <Card />
              <div className="home_layout">
                <div className="deal_funnel_chart">
                  <div>
                    <h1>hreveev</h1>
                    <h1>Heyy</h1>
                  </div>
                </div>
                <div className="opportunity_stage">
                  <div>
                    <h1>Heyy</h1>
                  </div>
                </div>
              </div>
              <PyramidChart /> {/* Use the PyramidChart component here */}
              <BarChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
