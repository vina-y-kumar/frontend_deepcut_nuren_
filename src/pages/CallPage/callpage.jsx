import React, { useState, useEffect } from 'react';
import "./callpage.css";
import { Sidebar } from "../../components/Sidebar";

const CallPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      Subject: "Follow up with Lead",
      CallType: "Outbound",
      CallStartTime: "2024-03-28 10:00",
      CallDuration: "2024-03-28 11:00",
      RelatedTo: "Creative Business Systems",
      ContactName: "Chau Kitzman",
      ContactOwner: "Adharsh Sharma",      
    },
  ]);

  useEffect(() => {
    const closeModal = () => setModalOpen(false);

    document.querySelector("#openModal").addEventListener("click", () => setModalOpen(true));
    document.querySelector("#closeModal").addEventListener("click", closeModal);

    return () => {
      document.querySelector("#openModal").removeEventListener("click", () => setModalOpen(true));
      document.querySelector("#closeModal").removeEventListener("click", closeModal);
    };
  }, []);

  const handleAllCalls = (event) => {
    console.log("Filter by: ", event.target.value);
  
  };

  const handleCreateMeeting = (event) => {
    event.preventDefault();
    console.log("Meeting created");
    
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
                      <legend className="form-legend">Log a call</legend>
                      <label className="form-label" htmlFor="location">
                        Call To:
                      </label>
                      <input type="text" name="location" id="location" className="form-input" required />
                      <label className="form-label" htmlFor="participants">
                        Related To:
                      </label>
                      <input type="text" name="participants" id="participants" className="form-input" required />
                      <label className="form-label" htmlFor="related-to" >
                        Call Type:
                      </label>
                      <input type="text" name="related-to" id="related-to" className="form-input"  required />
                      <label className="form-label" htmlFor="repeat">
                        Outgoing Call Status:
                      </label>
                      <input type="text" name="repeat" id="repeat" className="form-input" required />
                      <label htmlFor="appt">Select a time:</label>
                      <input type="time" id="appt" className="form-input" required />
                      <label className="form-label" htmlFor="description">
                        Voice Recording
                      </label>
                      <textarea type="text" name="description" id="description" className="form-input" required/>
                    </fieldset>
                    <div className="form-button-container">
                      <button type="button" className="form-button cancel-button1" id="closeModal">
                        Close
                      </button>
                      <button type="submit" className="form-button save-button1">
                        Save
                      </button>
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
          <table1>
            <thead1>
              <tr>
                <th>Subject</th>
                <th>Call Type</th>
                <th>Call Start Time</th>
                <th>Call Duration</th>
                <th>Related To</th>
                <th>Contact Name</th>
                <th>Contact Owner</th>
              </tr>
            </thead1>
            <tbody1>
              {meetings.map(meeting => (
                <tr key={meeting.id}>
                  <td>{meeting.Subject}</td>
                  <td>{meeting.CallType}</td>
                  <td>{meeting.CallStartTime}</td>
                  <td>{meeting.CallDuration}</td>
                  <td>{meeting.RelatedTo}</td>
                  <td>{meeting.ContactName}</td>
                  <td>{meeting.ContactOwner}</td>
                </tr>
              ))}
            </tbody1>
          </table1>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
