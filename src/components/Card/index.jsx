import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon1 from "../../assets/image1dp.png";
import Icon2 from "../../assets/image2dp.png";
import Icon3 from "../../assets/image3dp.png";
import Icon4 from "../../assets/image4dp.png";
import "./card.css";

export const Card = () => {
 


  return (
    <div className="card_wrapper">
      <div className="card_wrapper_inner">
        <NavLink to="/accounts" className="card_1 card">
        <div className="card_one">
            <img
              src={Icon4}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_1">$5K</p>
            <p className="card_paragraph">Closed Deals</p>
            
          </div>
        
        </NavLink>
        <NavLink to="/contacts" className="card_2 card">
        <div className="card_one">
            <img
              src={Icon3}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_2">20</p>
            <p className="card_paragraph">New Deals</p>
            
          </div>
        
        </NavLink>
     
      
        <NavLink to="/opportunities" className="card_3 card">
        <div className="card_one">
            <img
              src={Icon2}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_3">$10K</p>
            <p className="card_paragraph">Estimated Revenue</p>
            
          </div>
          
        </NavLink>
        <div className="card_4 card">
        <div className="card_one">
            <img
              src={Icon1}
              alt="icon"
              className="card_img"
              width={100}
              height={100}
            />
          </div>
          <div className="card_two">
          <p className="card_text_4">$10K{/*{groups.length}*/}</p>
            <p className="card_paragraph">Estimated Profit</p>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};
