import "./accountsTable.css";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import React, { useState, useEffect } from 'react';
import './Form1.jsx';
import { NavLink } from 'react-router-dom'


// import { AccountTableContent } from "../../components/AccountsTableContent";

export const AccountsTable = () => {
  //  const [modalOpen, setModalOpen] = useState(false);
 

  // const [searchQuery, setSearchQuery] = useState('');
  

  // const handleSearch = (e) => {
  //   setSearchQuery(e.target.value);
  // };
  

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
    <div className='calls1'>
    <div className="home_left_box1">
      <Sidebar />
    </div>
    

    
    <div className="contain1">
      <div className="meet1">
        <div className="Addcalls1">
          <select className="changes" onChange={handleAllCalls1}>
            <option value="">All Accounts</option>
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
          <NavLink to="/addform" id="btn1"> CreateAccount</NavLink>
          
           
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
          <option value="">50 Records per page</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </select>
             </div>
             <div className="bugs">
             <div className="filter-container">
  <h2>Filter Accounts by</h2>
  <div className="search-bar">
    <input type="text" placeholder="Search..." />
  </div>
  <div className="dropdown-container">
    <button className="dropdown-button">System Defined Filters</button>
    <div className="dropdown-content">
      <a href="#">  Contacts</a>
      <a href="#">Deals</a>
      <a href="#">Deal Amount</a>
      <a href="#">Deal Stage</a>
      <a href="#">Deal Owner</a>
      <a href="#">Deal Closing Date</a>
      <a href="#">Locked</a>
    </div>
    <button className="dropdown-button">Filter By Fields</button>
    <div className="dropdown-content">
      <a href="#">Account Name</a>
      <a href="#">Account Number</a>
    </div>
  </div>
</div>
     
      <div className="table1">
      <table>
      <thead>
      <tr>
        <th>Account Name</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Account Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Creative Business Systems</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
        <td>Adarsh+Sharma</td>
      </tr>
      <tr>
        <td>NP Agro</td>
        <td>555-555-5555</td>
        <td><a href="#">www.bentonjohnbjr.com</a></td>
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
