import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './table.css';
const initialTables = [
  {
    id: 'clientList',
    title: 'Client List',
    columns: [
      { id: 'sno', title: 'S.No' },
      { id: 'clientName', title: 'Client Name' },
      { id: 'phoneNumber', title: 'Phone Number' },
      { id: 'industryName', title: 'Industry Name' },
      { id: 'companyName', title: 'Company Name' },
      { id: 'companyEmail', title: 'Company Email' },
    ],
    data: [
      { sno: 1, clientName: 'Client A', phoneNumber: '123-456-7890', industryName: 'Tech', companyName: 'Company A', companyEmail: 'clienta@example.com' },
      { sno: 2, clientName: 'Client B', phoneNumber: '987-654-3210', industryName: 'Finance', companyName: 'Company B', companyEmail: 'clientb@example.com' },
    ],
  },
  {
    id: 'studentList',
    title: 'Student List',
    columns: [
      { id: 'studentName', title: 'Student Name' },
      { id: 'username', title: 'Username' },
      { id: 'dateTime', title: 'Date and Time' },
      { id: 'text', title: 'Text' },
    ],
    data: [
      { studentName: 'John Doe', username: 'johndoe123', dateTime: '2024-04-01 10:00 AM', text: 'Lorem ipsum dolor sit amet' },
      { studentName: 'Jane Doe', username: 'janedoe456', dateTime: '2024-04-02 11:30 AM', text: 'Consectetur adipiscing elit' },
    ],
  },
  {
    id: 'companyActions',
    title: 'Company Actions',
    columns: [
      { id: 'sno', title: 'S.No' },
      { id: 'companyName', title: 'Company Name' },
      { id: 'actions', title: 'Actions' },
    ],
    data: [
      { sno: 1, companyName: 'Company X', actions: 'Edit, Delete' },
      { sno: 2, companyName: 'Company Y', actions: 'Edit, Delete' },
    ],
  },
  // {
  //   id: 'clientList2',
  //   title: 'Client List',
  //   columns: [
  //     { id: 'sno', title: 'S.No' },
  //     { id: 'clientName', title: 'Client Name' },
  //     { id: 'phoneNumber', title: 'Phone Number' },
  //     { id: 'industryName', title: 'Industry Name' },
  //     { id: 'companyName', title: 'Company Name' },
  //     { id: 'companyEmail', title: 'Company Email' },
  //   ],
  //   data: [
  //     { sno: 1, clientName: 'Client A', phoneNumber: '123-456-7890', industryName: 'Tech', companyName: 'Company A', companyEmail: 'clienta@example.com' },
  //     { sno: 2, clientName: 'Client B', phoneNumber: '987-654-3210', industryName: 'Finance', companyName: 'Company B', companyEmail: 'clientb@example.com' },
  //   ],
  // },
];

const Tables = () => {
  const [tables, setTables] = useState(initialTables);

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dragged outside the droppable area

    const updatedTables = Array.from(tables);
    const [removed] = updatedTables.splice(result.source.index, 1);
    updatedTables.splice(result.destination.index, 0, removed);

    setTables(updatedTables);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tables" direction="both">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tables.map((table, index) => (
              <Draggable key={table.id} draggableId={table.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{
                      ...provided.draggableProps.style,
                      margin: 10,
                      display: 'inline-block',
                    }}
                  >
                    <h3 style={{textAlign:"center"}}>{table.title}</h3>
                    <table border="1">
                      <thead {...provided.dragHandleProps} style={{backgroundColor:"#15ABFFF"}}>
                        <tr>
                          {table.columns.map((column) => (
                            <th key={column.id}>{column.title}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.data.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            {table.columns.map((column) => (
                              <td key={column.id}>{row[column.id]}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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



export default Tables;
