import "./accountsSection.css";
import { Header } from "../../components/Header/index.jsx";
import { Sidebar } from "../../components/Sidebar/index.jsx";
import AccountsTable1 from "../../components/AccountsTableContent/Table.jsx";
import { AccountTableContent } from "../../components/AccountsTableContent/index.jsx";
import React, { useState, useEffect } from 'react';
import './AccountForm.jsx';
import { NavLink } from 'react-router-dom';

export const AccountsTable = () => {
  const handleAllCalls1 = (event) => {
    console.log("Filter by: ", event.target.value);
  };

  const handleAction = () => {
    console.log("Action required");
  };

  const handlePlusClick1 = () => {
    console.log("Plus clicked");
  };

  const handleRecords1 = (event) => {
    console.log("Records per page: ", event.target.value);
  };

  return (
    <div className="all_students">
      <div className='calls1'>
        <div className="home_left_box1">
          <Sidebar />
        </div>
        <div className="contain1" style={{width:"100%"}}>
          <div className="meet1" >
            <div className="Addcalls1">
              <select className="view-mode-select" onChange={handleAllCalls1}>
                <option value="">All Accounts</option>
                <option value="1">Log in</option>
                <option value="2">Log out</option>
              </select>  
            </div>
            <div className="handle1 ">
              <select onChange={handlePlusClick1} className="view-mode-select">
                <option value="">!!!</option>
                <option value="1">Log in</option>
                <option value="2">Log out</option>
              </select>
              
              <select className="view-mode-select" onChange={handleAction}>
                <option value="">Action</option>
                <option value="1">Log in</option>
                <option value="2">Log out</option>
              </select> 
              <div className="create1">
                <NavLink to="/addaccount" id="btn1"> Create Account</NavLink>
              </div>
            </div>
          </div>
          
          <AccountsTable1/>
        </div>
      </div>
    </div>
  );
};
