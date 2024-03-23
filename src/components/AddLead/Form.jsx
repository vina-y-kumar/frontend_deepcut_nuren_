import React, { useState } from 'react';
import './Addlead.css';
function Form() {
  const [formData, setFormData] = useState({
    title: '',
    product: '',
    noOfLicenses: '',
    client: '',
    paymentMethod: '',
    currency: '',
    budget: '',
    estRevenue: '',
    estCloseDate: '',
    pic: '',
    supervisor: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form >
      <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label HtmlFor="product">Product</label>
      <input type="text" className="form-control" id="product" placeholder=""/>
    </div>
    <div className="form-group col-md-6">
      <label HtmlFor="lincense">No. of License</label>
      <input type="text" className="form-control" id="lincense" placeholder=""/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label HtmlFor="client">Client</label>
      <input type="text" className="form-control" id="client" placeholder=""/>
    </div>
    <div className="form-group col-md-6">
      <label HtmlFor="company">Company</label>
      <input type="text" className="form-control" id="company" placeholder=""/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label HtmlFor="payment">Payment Method</label>
      <input type="number" className="form-control" id="payment" placeholder=""/>
    </div>
    <div className="form-group col-md-6">
      <label HtmlFor="currency">Currency</label>
      <input type="text" className="form-control" id="currency" placeholder=""/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label HtmlFor="budget">Budget</label>
      <input type="number" className="form-control" id="budget" placeholder=""/>
    </div>
    <div className="form-group col-md-6">
      <label HtmlFor="Deposit">Deposit</label>
      <input type="text" className="form-control" id="Deposit" placeholder=""/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label HtmlFor="revenue">Est. revenue</label>
      <input type="number" className="form-control" id="revenue" placeholder=""/>
    </div>
    <div className="form-group col-md-6">
      <label HtmlFor="closedate">Est.close date</label>
      <input type="date" className="form-control" id="closedate" placeholder=""/>
    </div>
  </div>
    </form>
  );
}

export default Form;
