import React, { useState, useEffect } from 'react';
import "./callpage.css";
import { Sidebar } from "../../components/Sidebar";
import axios from 'axios';


const CallPage = () => {

  
  const [modalOpen, setModalOpen] = useState(false);
  const [meet, setMeet] = useState([]);
  const [callData, setCallData] = useState({
    
      id: 1,
      location: "",
      call_type: "",
      start_time: "",
      to_time: "",
      related_to: "",
      createdBy: "",
      outgoing_status: "",      
    
});

useEffect(() => {
  axios
    .get("https://backendcrmnurenai.azurewebsites.net/calls/", {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setMeet(response.data);
    })
    .catch((error) => {
      console.error('Error fetching meet data:', error);
    });
}, []);



useEffect(() => {
  const modal1 = document.querySelector("#modal1");
  const openModal = document.querySelector("#openModal");
  const closeModal = document.querySelector("#closeModal");

  if (modal1 && openModal && closeModal) {
    openModal.addEventListener("click", () => setModalOpen(true));
    closeModal.addEventListener("click", () => setModalOpen(false));
  }

  return () => {
    if (modal1 && openModal && closeModal) {
      openModal.removeEventListener("click", () => setModalOpen(true));
      closeModal.removeEventListener("click", () => setModalOpen(false));
    }
  };
}, []);

const handleChange = (e) => {
  setCallData({ ...callData, [e.target.name]: e.target.value });
};

const handleCreateMeeting = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://backendcrmnurenai.azurewebsites.net/calls/', callData, {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });
    console.log('Meeting created successfully:', response.data);
    setMeet([...meet, response.data]);
    setModalOpen(false);
    setCallData({
      id: 1,
      location: "",
      call_type: "",
      start_time: "",
      to_time: "",
      related_to: "",
      createdBy: "",
      outgoing_status: "",      
    
    });
  } catch (error) {
    console.error('Error creating meeting:', error);
  }
};



 const handleAllCalls = (event) => {
    console.log("Filter by: ", event.target.value);
  };

 
  
  const handlePlusClick = () => {
    console.log("Plus clicked");
  };

  const handleRecords = (event) => {
    console.log("Records per page: ", event.target.value);
  };

  return (
    <div className='calls'>
      <div className="home_left_box">
        <Sidebar />
      </div>
      <div className="contain">
        <div className="meet">
          <div className="Addcalls">
            <select onChange={handleAllCalls}>
              <option value="">All Calls</option>
              <option value="1">Log in</option>
              <option value="2">Log out</option>
            </select>  
          </div>
          <div className="handle">
            <select onChange={handlePlusClick}>
              <option value="">!!!</option>
              <option value="1">Log in</option>
              <option value="2">Log out</option>
            </select>
            <div className="create">
              <button id="openModal">Create  Call</button>
              <dialog id="modal1" open={modalOpen}>
                <div className="meeting-form-container">
                  <form onSubmit={handleCreateMeeting} id="meeting-form">
                  <fieldset className="form-fieldset">
                    <legend className="form-legend">Log a Call </legend>
                    <label className="form-label" htmlFor="location">Location :</label>
                    <input type="text" name="location" id="location" className="form-input" required value={callData.location} onChange={handleChange} />
                    <label className="form-label" htmlFor="createdBy">Created By :</label>
                    <input type="text" name="createdBy" id="createdBy" className="form-input" required value={callData.createdBy} onChange={handleChange} />
                    <label className="form-label" htmlFor="outgoing_status">Contact Owner :</label>
                    <input type="text" name="outgoing_status" id="Cooutgoing_status" className="form-input" required value={callData.outgoing_status} onChange={handleChange} /> 
                    

                    <label className="form-label" htmlFor="call_type ">Call To :</label>
                    <input type="text" name="call_type" id="call_type" className="form-input" required value={callData.call_type} onChange={handleChange} />
                    <label className="form-label" htmlFor="start_time">From:</label>
                    <input type="datetime-local" name="start_time" id="start_time" className="form-input" required value={callData.start_time} onChange={handleChange} />
                    <label className="form-label" htmlFor="to_time">To:</label>
                    <input type="datetime-local" name="to_time" id="to_time" className="form-input" required value={callData.to_time} onChange={handleChange} />
                    <label className="form-label" htmlFor="related_to">Related To:</label>
                    <input type="text" name="related_to" id="related_to" className="form-input" required value={callData.related_to} onChange={handleChange} />
                    
                  </fieldset>
                    <div className="form-button-container">
                      <button type="button" className="form-button cancel-button1" id="closeModal" onClick={() => setModalOpen(false)}>Close</button>

                       
                     
                      <button type="submit" className="form-button save-button1">Save</button>

                    </div> 
                  </form>
                </div>
              </dialog>
            </div>
            <select onChange={handleCreateMeeting}>
              <option value="">Action</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
          </div>
        </div>
        <div className="records">
          <select className="page" onChange={handleRecords}>
            <option value="">10 Records per page</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </div>
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Created By</th>
                <th>outgoing_status</th>
                <th>call type</th>
                <th>Start Time</th>
                <th>To Time</th>
                <th>Related To</th>
              </tr>
            </thead>
            <tbody>
              {meet.map(meeting => (
                <tr key={meeting.id}>
                  <td>{meeting.location}</td>
                  <td>{meeting.createdBy}</td>
                  <td>{meeting.outgoing_status}</td>
                  <td>{meeting.call_type}</td>
                  <td>{meeting.start_time}</td>
                  <td>{meeting.to_time}</td>
                  <td>{meeting.related_to}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CallPage;