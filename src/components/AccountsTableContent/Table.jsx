
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const AccountsTable1 = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('https://backendcrmnurenai.azurewebsites.net/accounts/');
        setAccounts(response.data);
      } catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);
  // if (!accounts) {
  //   return <h2 style={{margin:" auto"}}>Loading...</h2>; // Show a loading message while fetching data
  // }
  return (
    <div>
      <h2>Accounts Table</h2>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Client Name</th>
            <th>Phone Number</th>
            <th>Industry</th>
            <th>Company Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={account.id}>
              <td>{index + 1}</td>
              <td><Link to={`/accounts/${account.id}`}>{account.Name}</Link></td>
              <td>{account.phone}</td>
              <td>{account.industry}</td>
              <td>{account.company}</td>
              <td>{account.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsTable1;
