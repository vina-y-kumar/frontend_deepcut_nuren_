import React, { useState, useRef } from "react";
import GridLayout from "react-grid-layout";
import './dashboard.css';

// Import your components from different parts of your code
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Tablee from "./Table";
// import Kanban1 from "../../components/Kanban/Kanban1";

const Dashboard = () => {
  const [layout, setLayout] = useState([]);
  const [isDraggable, setIsDraggable] = useState(false);
  const gridLayoutRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
 /* const DraggableComponents = [
    { id: "Client List", name: "Client List", component: <AllStudents /> },
    { id: "Company List", name: "Company List", component: <AllTeachers /> },
    { id: "Appeals", name: "Appeals", component: <ApealList /> },
  ];*/
  const handleAddComponent = (componentId) => {
    const newItem = {
      i: `new-item-${layout.length}`,
      x: 0,
      y: 0,
      w: Math.floor(window.innerWidth / 200), // Adjust as needed
      h: Math.floor(window.innerHeight / 200), // Adjust as needed
      componentId: componentId,
    };
    setLayout((prevLayout) => [...prevLayout, newItem]);
  };

  const handleDragStart = () => {
    setIsDraggable(true);
  };

  const handleDragEnd = () => {
    setIsDraggable(false);
  };
  const toggleVisibility = () => {
    setIsExpanded((prevState) => !prevState);
  };
  return (
    <div className="attendance">
     
        
          <div className="atenndance_left_box">
            <Sidebar />
          </div>
          <div className="attendance_right_box">
            <Header name="Dashboard" />
            <div className="atenndance_right_box_inner">
              {/* <div className="dashboard">
                <button onClick={toggleVisibility}>
                  <h2>Add Dashlets</h2>
                </button>
                {isExpanded && (
                  <div className="draggable-components">
                    <ul>
                      {DraggableComponents.map((component) => (
                        <li
                          key={component.id}
                          onClick={() => handleAddComponent(component.id)}
                        >
                          {component.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="dashboard-canvas">
                  <h2>Dashboard Canvas</h2>
                  <GridLayout
                    ref={gridLayoutRef}
                    className="layout"
                    layout={layout}
                    cols={12}
                    rowHeight={(window.innerHeight - 64) / 6}
                    width={window.innerWidth}
                    margin={[16, 16]}
                    isResizable={true}
                    isDraggable={isDraggable}
                  >
                    {layout.map((item) => (
                      <div key={item.i} style={{ position: "relative" }}>
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          {
                            DraggableComponents.find(
                              (c) => c.id === item.componentId
                            )?.component
                          }
                        </div>
                        <div>
                <button style={{ position: 'absolute', top: 0, left: 0 }} onMouseDown={handleDragStart} onMouseUp={handleDragEnd}>Drag here</button>
              </div>
             
                      </div>
                    ))}
                  </GridLayout>
                </div>
              </div> */}
              <Tablee/>
              {/* <Kanban1/> */}
            </div>
          </div>
        </div>
  
   
  );
};

export default Dashboard;
