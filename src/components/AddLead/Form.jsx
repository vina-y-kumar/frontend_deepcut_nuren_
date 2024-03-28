import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      const response = await axios.post('https://backendcrmnurenai.azurewebsites.net/leads/', formData);
      console.log('Form submitted successfully:', response.data);
      // console.log(formData);
      // Reset form data after successful submission if needed
      setFormData({
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
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="product">Product</label>
          <input
            type="text"
            className="form-control"
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            placeholder="Enter product"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="noOfLicenses">No. of Licenses</label>
          <input
            type="text"
            className="form-control"
            id="noOfLicenses"
            name="noOfLicenses"
            value={formData.noOfLicenses}
            onChange={handleChange}
            placeholder="Enter number of licenses"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="client">Client</label>
          <input
            type="text"
            className="form-control"
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            placeholder="Enter client"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="paymentMethod">Payment Method</label>
          <input
            type="text"
            className="form-control"
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            placeholder="Enter payment method"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="currency">Currency</label>
          <input
            type="text"
            className="form-control"
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            placeholder="Enter currency"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="budget">Budget</label>
          <input
            type="text"
            className="form-control"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Enter budget"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="estRevenue">Estimated Revenue</label>
          <input
            type="text"
            className="form-control"
            id="estRevenue"
            name="estRevenue"
            value={formData.estRevenue}
            onChange={handleChange}
            placeholder="Enter estimated revenue"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="estCloseDate">Estimated Close Date</label>
          <input
            type="date"
            className="form-control"
            id="estCloseDate"
            name="estCloseDate"
            value={formData.estCloseDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="pic">PIC</label>
          <input
            type="text"
            className="form-control"
            id="pic"
            name="pic"
            value={formData.pic}
            onChange={handleChange}
            placeholder="Enter PIC"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="supervisor">Supervisor</label>
          <input
            type="text"
            className="form-control"
            id="supervisor"
            name="supervisor"
            value={formData.supervisor}
            onChange={handleChange}
            placeholder="Enter supervisor"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Form;
