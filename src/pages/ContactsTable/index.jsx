import "./contactsTable.css";
// import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import React, { useState, useEffect } from 'react';
import './Form2.jsx';
import { NavLink } from 'react-router-dom'




export const ContactsTable = () => {

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
    <div className="calls1">
     <div className="home_left_box1">
      <Sidebar />
    </div>
    <div className="contain1">
      <div className="meet1">
        <div className="Addcalls1">
          <select  className="changes"onChange={handleAllCalls1}>
            <option value="">All Contacts</option>
            <option value="1">Log in</option>
            <option value="2">Log out</option>
          </select>  
        </div>
        <div className="handle1">
          <select onChange={handlePlusClick1}>
            <option value="">!!!</option>
            <option value="1">Log in</option>
            <option value="2">Log out</option>
          </select>
          <div className="create1">
          <NavLink to="/addform1" id="btn1"> Create Contact</NavLink>
          
           
          </div>
          
          <select  className="changes"onChange={handleAction}>
            <option value="">Action</option>
            <option value="1">Log in</option>
            <option value="2">Log out</option>
          </select> 
          
        </div>
      </div>
      <div className="records2">
        <select className="pages1" onChange={handleRecords1}>
          <option value="">10 Records per page</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
             </div>
             <div className="bugs">
             <div class="filter-container">
  <h2>Filter Contacts by</h2>
  <div class="search-bar">
    <input type="text" placeholder="Search..." />
  </div>
  <div class="dropdown-container">
    <button class="dropdown-button">System Defined Filters</button>
    <div class="dropdown-content">
      <a href="#">  Contacts</a>
      <a href="#">Deals</a>
      <a href="#">Deal Amount</a>
      <a href="#">Deal Stage</a>
      <a href="#">Deal Owner</a>
      <a href="#">Deal Closing Date</a>
      <a href="#">Locked</a>
      <a href="#">Notes</a>
      <a href="#">Activities</a>
      <a href="#">Campaigns</a>
    </div>
    <button class="dropdown-button">Filter By Fields</button>
    <div class="dropdown-content">
      <a href="#">Contact Name</a>
      <a href="#">Contact Number</a>
    </div>
  </div>
</div>
     
      <div className="table1">
      <table>
      <thead>
      <tr>
       <th>Contact  Name</th>
        <th>Account Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Contact Owner</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        <td>NP Agro</td>
        <td> XYZ </td>
        <td><a href="#">abc@gmail.com</a></td>
        <td>887938358</td>
        <td>Adarsh+Sharma</td>
      </tr>
     
      
    </tbody>
</table>
      </div>
             </div>

    </div>
    </div>
  );
};
