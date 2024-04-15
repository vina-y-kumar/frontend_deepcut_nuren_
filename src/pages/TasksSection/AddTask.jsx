import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTaskForm = () => {
  const [taskData, setTaskData] = useState({
    subject: '',
    status: '',
    due_date: '',
    priority: '',
    description: '',
    createdBy: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backendcrmnurenai.azurewebsites.net/tasks/', taskData);
     
    //   Reset form after successful submission
    Swal.fire({
        title: "Good job!",
        text: "Task Added Successfully!",
        icon: "success"
      });
      setTaskData({
        subject: '',
        status: '',
        due_date: '',
        priority: '',
        reminder: '',
        description: ''
      });
    console.log(taskData);
    } catch (error) {
      console.error('Error adding task:', error.type);
      console.log(taskData)
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ml-5 mr-5">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={taskData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="status" className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={taskData.status}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="due_date" className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            id="due_date"
            name="due_date"
            value={taskData.due_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="priority" className="form-label">Priority</label>
          <select
            className="form-select"
            id="priority"
            name="priority"
            value={taskData.priority}
            onChange={handleChange}
            required
          >
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* <div className="mb-3">
          <label htmlFor="reminder" className="form-label">Reminder</label>
          <input
            type="text"
            className="form-control"
            id="reminder"
            name="reminder"
            value={taskData.reminder}
            onChange={handleChange}
          />
        </div> */}
<div className="form-group col-md-6">
          <label htmlFor="createdBy" className="form-label">Created By</label>
          <input
            type="number"
            className="form-control"
            id="createdBy"
            name="createdBy"
            value={taskData.createdBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 ml-5 mr-5">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={taskData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        

        <button type="submit" style={{marginLeft:"45%"}} className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
