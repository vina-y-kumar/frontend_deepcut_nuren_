import React from 'react';
import Draggable from 'react-draggable';
import  { useState } from 'react';
// import './table.css';

const Tablee = () => {
  return (
    <div className="table">
      <Draggable>
        <div className="table-container">
          <h2>Client List</h2>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Client Name</th>
                <th>Phone Number</th>
                <th>Industry Name</th>
                <th>Company Name</th>
                <th>Company Email</th>
              </tr>
            </thead>
            <tbody>
              {/* Random data */}
              <tr>
                <td>1</td>
                <td>Client A</td>
                <td>123-456-7890</td>
                <td>Tech</td>
                <td>ABC Corp</td>
                <td>clienta@abccorp.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Client B</td>
                <td>123-456-7890</td>
                <td>Tech</td>
                <td>ABC Corp</td>
                <td>clienta@abccorp.com</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </Draggable>

      <Draggable>
        <div className="table-container">
          <h2>Student List</h2>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Username</th>
                <th>Date and Time</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {/* Random data */}
              <tr>
                <td>John Doe</td>
                <td>johndoe123</td>
                <td>2024-03-26 10:00 AM</td>
                <td>Lorem ipsum dolor sit amet</td>
              </tr>
              <tr>
                <td>Vinay Kumar</td>
                <td>vinay123</td>
                <td>2024-03-26 10:00 AM</td>
                <td>Lorem ipsum dolor sit amet</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </Draggable>

      <Draggable>
        <div className="table-container">
          <h2>Action List</h2>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Company Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Random data */}
              <tr>
                <td>1</td>
                <td>XYZ Corp</td>
                <td>Edit | Delete</td>
              </tr>
              <tr>
                <td>2</td>
                <td>XYZ Corp</td>
                <td>Edit | Delete</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </Draggable>
    </div>
  );
};


// import Draggable from 'react-draggable';


export default Tablee;

