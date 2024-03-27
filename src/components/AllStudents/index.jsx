import './allstudents.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditableRow = ({ rowData, rowIndex, columns, onChange, isEditing }) => {
  return (
    <>
      <td>{rowIndex + 1}</td>
      {columns.map((colKey, colIndex) => (
        <EditableCell
          key={colKey}
          value={rowData[colKey]}
          onChange={(value) => onChange(rowIndex, colKey, value)}
          isEditing={isEditing}
        />
      ))}
    </>
  );
};

const EditableCell = ({ value, onChange, isEditing }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleClick = () => {
    if (isEditing) {
      setInputValue(value); // Reset input value on click
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      onChange(inputValue);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <td onClick={handleClick} style={{ position: 'relative', color: '#000' }}>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            border: 'none',
            outline: 'none',
            width: 'calc(100% - 2px)',
            backgroundColor: '#fff',
            color: '#000',
          }}
        />
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
};

export const AllStudents = () => {
  const [studentData, setStudentData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get("https://backendcrmnurenai.azurewebsites.net/accounts/", {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  const columnsToDisplay = ['Name', 'phone', 'industry','company','email']; // Add the columns you want to display here

  const handleCellChange = (rowIndex, key, value) => {
    const newData = [...studentData];
    newData[rowIndex][key] = value;
    setStudentData(newData);
    // Add logic to submit changes to the backend here if needed
  };

  const handleSubmit = (updatedData) => {
    axios.put(`https://backendcrmnurenai.azurewebsites.net/accounts/${updatedData.id}/`, updatedData, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log('Data updated successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error updating data:', error);
    });
  };

  const toggleEditMode = () => {
    setIsEditing((prev) => !prev);
  };
  const handleSubmitRow = (updatedData) => {
    handleSubmit(updatedData);
  };

  return (
    <div className="excel-like-table">
      <button onClick={toggleEditMode} style={{ marginBottom: '10px' }}>
        {isEditing ? 'Disable Edit Mode' : 'Enable Edit Mode'}
      </button>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Client Name</th>
            <th>Phone Number</th>
            <th>Industry</th>
            <th>Company Name</th>
            <th>Company Email</th>
          </tr>
        </thead>
      
        <tbody>
        {studentData.map((row, rowIndex) => (
  <tr key={rowIndex}>
    <EditableRow
      rowData={row}
      rowIndex={rowIndex}
      columns={columnsToDisplay}
      onChange={(rowIndex, key, value) =>
        handleCellChange(rowIndex, key, value)
      }
      isEditing={isEditing}
    />
    <td>
      {isEditing && (
        <button onClick={() => handleSubmitRow(row)}>Save</button>
      )}
    </td>
  </tr>
))}
        </tbody>
      </table>
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Submit Changes
      </button>
    </div>
  );
};
