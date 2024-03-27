import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tablee = () => {
  const [tables, setTables] = useState(['clients', 'clients2', 'companies', 'appeals']);

  const handleDragEnd = result => {
    if (!result.destination) return;
    const newTables = [...tables];
    const [reorderedItem] = newTables.splice(result.source.index, 1);
    newTables.splice(result.destination.index, 0, reorderedItem);
    setTables(newTables);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tables" direction="horizontal">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tables.map((table, index) => (
              <Draggable key={table} draggableId={table} index={index}>
                {provided => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{ display: 'inline-block', marginRight: '10px' }}
                  >
                    {table === 'clients' && <ClientsTable />}
                    {table === 'clients2' && <ClientsTable />}
                    {table === 'companies' && <CompaniesTable />}
                    {table === 'appeals' && <AppealsTable />}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const ClientsTable = () => {
  const clientListData = [
    { id: 1, clientName: 'Client 1', phoneNumber: '123-456-7890', industryName: 'Industry 1', companyName: 'Company A', companyEmail: 'companya@example.com' },
    { id: 2, clientName: 'Client 2', phoneNumber: '456-789-0123', industryName: 'Industry 2', companyName: 'Company B', companyEmail: 'companyb@example.com' },
 
  ];

  return (
    <table style={{ border: '1px solid black' }}>
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
        {clientListData.map((client, index) => (
          <tr key={index}>
            <td>{client.id}</td>
            <td>{client.clientName}</td>
            <td>{client.phoneNumber}</td>
            <td>{client.industryName}</td>
            <td>{client.companyName}</td>
            <td>{client.companyEmail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const CompaniesTable = () => {
  
  const companyListData = [
    { id: 1, companyName: 'Company A', actions: 'Edit/Delete' },
    { id: 2, companyName: 'Company B', actions: 'Edit/Delete' },
    
  ];

  return (
    <>
    <table style={{ border: '1px solid black' }}>
        
      <thead>
        <tr>
          <th>S.No</th>
          <th>Company Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {companyListData.map((company, index) => (
          <tr key={index}>
            <td>{company.id}</td>
            <td>{company.companyName}</td>
            <td>{company.actions}</td>
          </tr>
        ))}
      </tbody>
    </table></>
  );
};

const AppealsTable = () => {
  
  const appealsData = [
    { studentName: 'John Doe', username: 'johndoe', dateTime: '2024-03-26 10:00 AM', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { studentName: 'Jane Smith', username: 'janesmith', dateTime: '2024-03-26 11:00 AM', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    
  ];

  return (
      <>
    <table style={{ border: '1px solid black' }}>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Username</th>
          <th>Date and Time</th>
          <th>Text</th>
        </tr>
      </thead>
      <tbody>
        {appealsData.map((appeal, index) => (
          <tr key={index}>
            <td>{appeal.studentName}</td>
            <td>{appeal.username}</td>
            <td>{appeal.dateTime}</td>
            <td>{appeal.text}</td>
          </tr>
        ))}
      </tbody>
    </table></>
  );
};
export default Tablee;