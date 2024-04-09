import React, { useState } from 'react';
import axios from 'axios';
import "./accountsTable.css";
import { Header } from '../../components/Header';


function Form1() {
  const [accountData, setAccountData] = useState({
    AccountOwner: '',
    AccountName: '',
    AccountSite: '',
    ParentAccount: '',
    AccountNumber: '',
    AccountType: '',
    Industry: '',
    AnnualRevenue: '',
    BillingStreet: '',
    BillingCity: '',
    BillingState: '',
    BillingCode: '',
    BillingCountry: '',
    Rating: '',
    Phone: '',
    Fax: '',
    Website: '',
    TickerSymbol: '',
    Ownership: '',
    Employees: '',
    SicCode: '',
    ShippingStreet:'',
    ShippingCountry:'',
    ShippingState:'',
    ShippingCity:'',
    ShippingCode:'',
    Description:'',


  });

  const handleChange = (event) => {
    setAccountData({
      ...accountData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const response = await axios.post('https://backendcrmnurenai.azurewebsites.net/accounts/', accountData);
      console.log('Form submitted successfully:', response.data);
      // console.log(formData);
      // Reset form data after successful submission if needed
      setAccountData({
     AccountOwner: '',
    AccountName: '',
    AccountSite: '',
    ParentAccount: '',
    AccountNumber: '',
    AccountType: '',
    Industry: '',
    AnnualRevenue: '',
    BillingStreet: '',
    BillingCity: '',
    BillingState: '',
    BillingCode: '',
    BillingCountry: '',
    Rating: '',
    Phone: '',
    Fax: '',
    Website: '',
    TickerSymbol: '',
    Ownership: '',
    Employees: '',
    SicCode: '',
    ShippingStreet:'',
    ShippingCountry:'',
    ShippingState:'',
    ShippingCity:'',
    ShippingCode:'',
    Description:'',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
 <Header name="Account Information"/>
     <form onSubmit={handleSubmit}>
<div className="form-row">
        <div className="form-group ">
          <label htmlFor="AccountOwner">Account Owner</label>
          <input
            type="text"
            className="form-control"
            id="AccountOwner"
            name="AccountOwner"
            value={accountData.AccountOwner}
            onChange={handleChange}
            placeholder="Enter Account Owner"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="AccountName">Account Name</label>
          <input
            type="text"
            className="form-control"
            id="AccountName"
            name="AccountName"
            value={accountData.AccountName}
            onChange={handleChange}
            placeholder="Enter AccountName"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="AccountSite">Account Site</label>
          <input
            type="text"
            className="form-control"
            id="AccountSite"
            name="AccountSite"
            value={accountData.AccountSite}
            onChange={handleChange}
            placeholder="Enter site name"
          />
        </div>
  <div className="form-group col-md-6">
          <label htmlFor="ParentAccount">Parent Account</label>
          <input
            type="text"
            className="form-control"
            id="ParentAccount"
            name="ParentAccount"
            value={accountData.ParentAccount}
            onChange={handleChange}
            placeholder="Enter Parent account"
          />
        </div>
<div className="form-group col-md-6">
          <label htmlFor="AccountNumber">Account Number</label>
          <input
            type="text"
            className="form-control"
            id="AccountNumber"
            name="AccountNumber"
            value={accountData.AccountNumber}
            onChange={handleChange}
            placeholder="Enter account number"
          />
        </div>
<div className="form-group col-md-6">
          <label htmlFor="AccountType">Account Type </label>
          <input
            type="text"
            className="form-control"
            id="AccountType"
            name="AccountType"
            value={accountData.AccountType}
            onChange={handleChange}
            placeholder="Enter account type"
          />
          </div>
 <div className="form-group col-md-6">
          <label htmlFor="Industry">Industry</label>
          <input
            type="text"
            className="form-control"
            id="Industry"
            name="Industry"
            value={accountData.Industry}
            onChange={handleChange}
            placeholder="Enter industry"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="AnnualRevenue">Annual Revenue</label>
          <input
            type="text"
            className="form-control"
            id="AnnualRevenue"
            name="AnnualRevenue"
            value={accountData.AnnualRevenue}
            onChange={handleChange}
            placeholder="Enter revenue"
          />
        </div>
</div>

<div className="form-row">

<div className="form-group col-md-6">
          <label htmlFor="Rating">Rating</label>
          <input
            type="text"
            className="form-control"
            id="Rating"
            name="Rating"
            value={accountData.Rating}
            onChange={handleChange}
            placeholder="Enter rating"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Tax">Phone</label>
          <input
            type="text"
            className="form-control"
            id="Phone"
            name="Phone"
            value={accountData.Phone}
            onChange={handleChange}
            placeholder="Enter Phone"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Fax">Fax</label>
          <input
            type="text"
            className="form-control"
            id="Fax"
            name="Fax"
            value={accountData.Fax}
            onChange={handleChange}
            placeholder="Enter Fax"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Website">Website</label>
          <input
            type="text"
            className="form-control"
            id="Website"
            name="Website"
            value={accountData.Website}
            onChange={handleChange}
            placeholder="Enter Website"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="TickerSymbol">Ticker Symbol</label>
          <input
            type="text"
            className="form-control"
            id="TickerSymbol"
            name="TickerSymbol"
            value={accountData.TickerSymbol}
            onChange={handleChange}
            placeholder="Enter Ticker"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Ownership">Ownership</label>
          <input
            type="Ownership"
            className="form-control"
            id="Ownership"
            name="Ownership"
            value={accountData.Ownership}
            onChange={handleChange}
            placeholder="Enter Ownership"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="Employees">Employees</label>
          <input
            type="Employees"
            className="form-control"
            id="Employees"
            name="Employees"
            value={accountData.Employees}
            onChange={handleChange}
            placeholder="Enter Employees"
          />
        </div>
</div>
        
        



 <div className="form-row">
  <h1 className='info'>Address Information</h1>  
  <div>
  <div className="form-group col-md-6">
          <label htmlFor="BillingStreet">Billing Street </label>
          <input
            type="text"
            className="form-control"
            id="BillingStreet"
            name="BillingStreet"
            value={accountData.BillingStreet}
            onChange={handleChange}
            placeholder="Enter billing street"
          />
        </div>
<div className="form-group col-md-6">
          <label htmlFor="BillingCity">Billing City </label>
          <input
            type="text"
            className="form-control"
            id="BillingCity"
            name="BillingCity"
            value={accountData.BillingCity}
            onChange={handleChange}
            placeholder="Enter billing city"
          />
        </div>
  <div className="form-group col-md-6">
          <label htmlFor="BillingState"> Billing State</label>
          <input
            type="text"
            className="form-control"
            id="BillingState"
            name="BillingState"
            value={accountData.BillingState}
            onChange={handleChange}
            placeholder="Enter billing state"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="BillingCode"> Billing Code</label>
          <input
            type="text"
            className="form-control"
            id="BillingCode"
            name="BillingCode"
            value={accountData.BillingCode}
            onChange={handleChange}
            placeholder="Enter billing code"
          />
        </div>
<div className="form-group col-md-6">
          <label htmlFor="BillingCountry">Billing Country</label>
          <input
            type="text"
            className="form-control"
            id="BillingCountry"
            name="BillingCountry"
            value={accountData.BillingCountry}
            onChange={handleChange}
            placeholder="Enter Billing country"
          />
        </div>
</div>

<div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="ShippingStreet">Shipping Street</label>
          <input
            type="text"
            className="form-control"
            id="ShippingStreet"
            name="ShippingStreet"
            value={accountData.ShippingStreet}
            onChange={handleChange}
            placeholder="Enter shipping street"
          />
        </div>
<div className="form-group col-md-6">
          <label htmlFor="ShippingCity">Shipping City</label>
          <input
            type="text"
            className="form-control"
            id="ShippingCity"
            name="ShippingCity"
            value={accountData.ShippingCity}
            onChange={handleChange}
            placeholder="Enter shipping city"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="ShippingState">Shipping State</label>
          <input
            type="text"
            className="form-control"
            id="ShippingState"
            name="ShippingState"
            value={accountData.ShippingState}
            onChange={handleChange}
            placeholder="Enter shipping state"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="ShippingCode">Shipping Code</label>
          <input
            type="text"
            className="form-control"
            id="ShippingCode"
            name="ShippingCode"
            value={accountData.ShippingCode}
            onChange={handleChange}
            placeholder="Enter shipping Code"
          />
        </div>
 <div className="form-group col-md-6">
          <label htmlFor="ShippingCountry">Shipping Country</label>
          <input
            type="text"
            className="form-control"
            id="ShippingCountry"
            name="ShippingCountry"
            value={accountData.ShippingCountry}
            onChange={handleChange}
            placeholder="Enter shipping country"
          />
        </div>
</div>
 <div className="form-row">
        <div className="form-group ">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="form-control"
            id="Description"
            name="Description"
            value={accountData.Description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>
      </div>
    </div>    
        
<button type="submit" className="btn btn-primary">Submit</button>
 </form>        
      </div>

 
         
  );
}

export default Form1;
