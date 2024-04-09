import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './accountsTableContent.css';
import axios from 'axios';

const AccountsTable1 = () => {
  const [accounts, setAccounts] = useState([]);
  const [viewMode, setViewMode] = useState('table'); // Default view mode is table

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

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleViewModeChange('table')}>Table View</button>
        <button onClick={() => handleViewModeChange('kanban')}>Kanban View</button>
        <button onClick={() => handleViewModeChange('list')}>List View</button>
      </div>
      <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="viewModeDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            View Mode
          </button>
          <div className="dropdown-menu" aria-labelledby="viewModeDropdown">
            <button className="dropdown-item" onClick={() => handleViewModeChange('table')}>Table View</button>
            <button className="dropdown-item" onClick={() => handleViewModeChange('kanban')}>Kanban View</button>
            <button className="dropdown-item" onClick={() => handleViewModeChange('list')}>List View</button>
          </div>
        </div>
      {viewMode === 'table' && (
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
      )}
      {viewMode === 'kanban' && (
        <div>
          <h2>Kanban View</h2>
          {/* Implement your Kanban view here */}
        </div>
      )}
      {viewMode === 'list' && (
        <div>
          <h2>List View</h2>
          {/* Implement your list view here */}
        </div>
      )}
    </div>
  );
};

export default AccountsTable1;
