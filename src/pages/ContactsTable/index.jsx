import "./contactsTable.css";
// import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import "./Form2.jsx";
import { Card, ListGroup } from "react-bootstrap";

export const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  const [newContact, setNewContact] = useState({
    first_name: "",
    account: "",
    email: "",
    phone: "",
    createdBy: "",
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        "https://backendcrmnurenai.azurewebsites.net/contacts/"
      );
      const data = await response.json();
      console.log(response);
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await post(
        "https://backendcrmnurenai.azurewebsites.net/contacts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
        }
      );
      if (response.ok) {
        fetchContacts();
        setNewContact({
          first_name: "",
          account: "",
          email: "",
          phone: "",
          createdBy: "",
        });
        console.log("New contact created successfully");
      } else {
        console.error("Failed to create new contact");
      }
    } catch (error) {
      console.error("Error creating new contact:", error);
    }
  };

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
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };
  return (
    <div className="calls1">
      <div className="home_left_box1">
        <Sidebar />
      </div>
      <div className="contain1" style={{width:"100%"}}>
        <div className="meet1">
          <div className="Addcalls1">
            <select className="view-mode-select" onChange={handleAllCalls1}>
              <option value="">All Contacts</option>
              <option value="1">Log in</option>
              <option value="2">Log out</option>
            </select>
          </div>
          <div className="handle1">
            <select onChange={handlePlusClick1} className="view-mode-select">
              <option value="">!!!</option>
              <option value="1">Log in</option>
              <option value="2">Log out</option>
            </select>
            <div className="create1">
              <NavLink to="/addcontact" id="btn1">
                Create Contact
              </NavLink>
            </div>

            <select className="view-mode-select" onChange={handleAction}>
              <option value="">Action</option>
              <option value="1">Log in</option>
              <option value="2">Log out</option>
            </select>
          </div>
        </div>
        <div className="records">
          <select className="view-mode-select" onChange={handleRecords1}>
            <option value="">10 Records per page</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <select
            value={viewMode}
            onChange={handleViewModeChange}
            className="view-mode-select"
          >
            <option value="">View!</option>
            <option onClick={() => handleViewModeChange("table")} value="">
              Table View
            </option>
            <option onClick={() => handleViewModeChange("tile")}>
              Tile View
            </option>
            <option onClick={() => handleViewModeChange("list")}>
              List View
            </option>
          </select>
        </div>
        <div className="bugs">
          <div className="filter-container">
            <h2>Filter Contacts by</h2>
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="dropdown-container">
              <button className="dropdown-button">
                System Defined Filters
              </button>
              <div className="dropdown-content">
                <a href="#"> Contacts</a>
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
              <button className="dropdown-button">Filter By Fields</button>
              <div className="dropdown-content">
                <a href="#">Contact Name</a>
                <a href="#">Contact Number</a>
              </div>
            </div>
          </div>

{/* Table View */}
{viewMode==='table' &&(
          <div className="table1">
            <table>
              <thead>
                <tr>
                  <th>Contact Name</th>
                  <th>Description</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {contacts?.map &&
                  contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>
                        <NavLink to={`/contactinfo/${contact.id}`}>
                          {contact.first_name + " " + contact.last_name}
                        </NavLink>
                      </td>
                      <td>{contact.description}</td>
                      <td>
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                      </td>
                      <td>{contact.phone}</td>
                      <td>{contact.address}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          )}
          {/* Tile View */}
          {viewMode==='tile' &&(
            
            <div>
          <h2>Tiles View</h2>
          {/* Implement your Kanban view here */}
          <div className="accounts-tiles-container">
            {contacts.map((contact, index) => (
              <Card key={contact.id} className="account-tile">
                <Card.Body>
                  <Card.Title>
                    <Link to={`/contactinfo/${contact.id}`}>
                      {contact.first_name+" "+contact.last_name}
                    </Link>
                  </Card.Title>
                  <Card.Text>Phone Number: {contact.phone}</Card.Text>
                  <Card.Text>Address: {contact.address}</Card.Text>
                  <Card.Text>Description: {contact.description}</Card.Text>
                  <Card.Text>Email: {contact.email}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
          )}
          {/* List View */}
          {viewMode==='list' &&(
            <div>
            <h2>List View</h2>
            <div className="accounts-list-container" style={{width:"180%"}}>
              <ListGroup >
                {contacts.map((contact, index) => (
                  <ListGroup.Item key={contact.id} className="accounts-list-item" >
                    <Link to={`/contactinfo/${contact.id}`}>{contact.first_name+" "+contact.last_name}</Link>
                    <p>Phone Number: {contact.phone}</p>
                    <p>Description: {contact.description}</p>
                    <p>Address: {contact.address}</p>
                    <p>Email: {contact.email}</p>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};
