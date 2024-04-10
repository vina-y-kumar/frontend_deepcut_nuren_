import React, { useEffect, useState } from "react";
import "./page.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedList from "../ContactsTable/RelatedList";
const AccountsPage = () => {
  const companyInfo = {
    name: "Neuren AI",
    logo: "https://plus.unsplash.com/premium_photo-1675793715068-8cd9ce15f430?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9nb3xlbnwwfHwwfHx8MA%3D%",
    website: "https://www.yourcompany.com",
    email: "info@gmail.com",
    owner: "John Doe",
    industry: "Technology",
    employees: 100,
    revenue: "$10 million",
    contactNumber: "+1 123-456-7890",
  };
  const { id } = useParams(); // Get the account ID from the URL parameter
  const [account, setAccount] = useState(null);
  const [attachments, setAttachments] = useState([]);
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await axios.get(
          `https://backendcrmnurenai.azurewebsites.net/accounts/${id}`
        );
        setAccount(response.data);
        console.log(account[0].Name);
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    };

    fetchAccountData();
  }, [id]);

  if (!account) {
    return <h2 style={{ margin: " auto" }}>Loading...</h2>; // Show a loading message while fetching data
  }

  const contactPersons = [
    {
      name: "Jane Smith",
      position: "Manager",
      email: "jane@example.com",
      phone: "+1 234-567-8901",
    },
    {
      name: "Mike Johnson",
      position: "Sales Rep",
      email: "mike@example.com",
      phone: "+1 345-678-9012",
    },
    // Add more contact persons as needed
  ];
  const accountInfo = {
    accountNumber: "ACC123456789",
    accountType: "Premium",
    startDate: "01/01/2022",
    renewalDate: "01/01/2023",
  };

  const addressInfo = {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    setAttachments([...attachments, ...files]);
  };

  const handleDeleteAttachment = (index) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setAttachments(updatedAttachments);
  };
  const relatedListItems = [
    "Notes",
    "Cadences",
    "Attachments",
    "Deals",
    "Open Activities",
    "Closed Activities",
    "Invited Meetings",
    "Products",
    "Cases",
    "Quotes",
    "Sales Orders",
    "Purchase Orders",
    "Emails",
    "Invoices",
  ];
  return (
    <>
      <div className="classs">
        <div className="buttonss">
          {/* <div className="mail-icon-button">
            <button>Send Email</button>
          </div>
          <div className="edit-button">
            <button>Edit</button>
          </div>
          <div className="dot-button">
            <button>...</button>
          </div> */}
          <div className="pages">
            
            <div>
              <RelatedList title="Related List" items={relatedListItems} />
            </div>
          </div>
          <div className="blank-page">
            {/* Header */}
            <div className="header">
              <img src={companyInfo.logo} className="logo" alt="Company Logo" />
              <a
                href={`mailto:${account.email}`}
                className="btn btn-primary"
                style={{ float: "right", color: "white" }}
              >
                Send Email
              </a>
              <div className="header-content">
                <h1>{account.company}</h1>
              </div>
              <a
                href={account.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
            <div className="overview">
              <h2>Overview</h2>
              <p>
                <strong>Account Owner:</strong> {account.Name}
              </p>
              <p>
                <strong>Industry:</strong> {account.industry}
              </p>
              <p>
                <strong>Description:</strong> {account.description}
              </p>
              <p>
                <strong>Number of Employees:</strong> {companyInfo.employees}
              </p>
              <p>
                <strong>Annual Revenue:</strong> {companyInfo.revenue}
              </p>
              <p>
                <strong>Contact Number:</strong> {account.phone}
              </p>
            </div>
            <div className="contacts">
              <ul className="list-group">
                <h2>Contacts</h2>
                {contactPersons.map((contact, index) => (
                  <li key={index} className="list-group-item">
                    <strong>Name:</strong> {contact.name}
                    <br />
                    <strong>Position:</strong> {contact.position}
                    <br />
                    <strong>Email:</strong> {contact.email}
                    <br />
                    <strong>Phone:</strong> {contact.phone}
                  </li>
                ))}
              </ul>
            </div>
            <div className="account-info">
              <h2>Account Information</h2>
              <p>
                <strong>Account Number:</strong> {accountInfo.accountNumber}
              </p>
              <p>
                <strong>Account Type:</strong> {accountInfo.accountType}
              </p>
              <p>
                <strong>Start Date:</strong> {accountInfo.startDate}
              </p>
              <p>
                <strong>Renewal Date:</strong> {accountInfo.renewalDate}
              </p>
            </div>
            <div className="address-info">
              <h2>Address Information</h2>
              <p>
                <strong>Street:</strong> {addressInfo.street}
              </p>
              <p>
                <strong>City:</strong> {addressInfo.city}
              </p>
              <p>
                <strong>State:</strong> {addressInfo.state}
              </p>
              <p>
                <strong>ZIP Code:</strong> {addressInfo.zip}
              </p>
              <p>
                <strong>Country:</strong> {addressInfo.country}
              </p>
            </div>
            <div className="attachment-section">
              <h2>Attachments</h2>
              <input
                className="filebtn"
                type="file"
                onChange={handleFileUpload}
                multiple
              />
              <ul className="">
                {attachments.map((file, index) => (
                  <li key={index} className="files">
                    {file.name}
                    <button
                      className="dltbtn"
                      onClick={() => handleDeleteAttachment(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsPage;
