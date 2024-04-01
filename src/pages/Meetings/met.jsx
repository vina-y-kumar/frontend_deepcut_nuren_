import React, { useState, useEffect } from 'react';
import "./meetings.css";
import axios from 'axios';
import { Sidebar } from "../../components/Sidebar";

const Met = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [meetings, setMeetings] = useState([
    
  ]);
  useEffect(() => {
    axios
      .get("https://backendcrmnurenai.azurewebsites.net/meetings/", {
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setMeetings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching meetings data:', error);
      });
  }, []);

  useEffect(() => {
    const modal = document.querySelector("#modal");
    const openModal = document.querySelector("#openModal");
    const closeModal = document.querySelector("#closeModal");

    if (modal && openModal && closeModal) {
      openModal.addEventListener("click", () => setModalOpen(true));
      closeModal.addEventListener("click", () => setModalOpen(false));
    }

    return () => {
      if (modal && openModal && closeModal) {
        openModal.removeEventListener("click", () => setModalOpen(true));
        closeModal.removeEventListener("click", () => setModalOpen(false));
      }
    };
  }, []);

  const createLead = () => {
    const leadData = {
      title: "h3",
      location: "delhoo",
      from_time: "2024-01-01T22:01",
      to_time: "2024-01-01T22:10",
      related_to: "sale",
      createdBy: "2",
    };

    axios.post('https://backendcrmnurenai.azurewebsites.net/meetings/', leadData)
      .then(response => {
        console.log('Lead created successfully:', response.data);
    
      })
      .catch(error => {
        console.error('Error creating lead:', error);
      });
  };

  const handleCreateMeeting = () => {
    createLead();
    console.log("Create Meeting clicked");
  };

  const handlePlusClick = () => {
    console.log("Plus clicked");
  };

  const handleRecords = () => {
    console.log("Contain records");
  
  };

  return (
    <div className='calls'>
      <div className="home_left_box">
        <Sidebar />
      </div>
      <div className="contain">
        <div className="meet">
          <select onChange={handlePlusClick}>
            <option value="">!!!</option>
            <option value="1">Log in</option>
            <option value="2">Log out</option>
          </select>
          <div className="create">
            <button id="openModal">Client Meetings</button>
            <dialog id="modal" open={modalOpen}>
              <div className="meeting-form-container">
                <form action="#" method="post" id="meeting-form">
                  <fieldset className="form-fieldset">
                    <legend className="form-legend">Meeting Information</legend>
               

                    <label className="form-label" htmlFor="location">
        Location:
      </label>
      <input type="text" name="location" id="location" className="form-input" required />
      <label className="form-label" htmlFor="participants">
        Participants:
      </label>
      <input type="text" name="participants" id="participants" className="form-input" required />
      <label className="form-label" htmlFor="related-to" >
        Related To:
      </label>
      <input type="text" name="related-to" id="related-to" className="form-input"  required />
      <label className="form-label" htmlFor="repeat">
        Repeat:
      </label>
      <input type="text" name="repeat" id="repeat" className="form-input" required />
      <label className="form-label" htmlFor="participants-reminder">
        Participants Reminder:
      </label>
      <input type="text" name="participants-reminder" id="participants-reminder" className="form-input" value="None" />
      <label className="form-label" htmlFor="description">
        Description:
      </label>
      <textarea type="text" name="description" id="description" className="form-input" required/>
      <label className="form-label" htmlFor="reminder-time">
        Reminder Time:
      </label>
      <select name="reminder" id="reminder">
      <option value="none">select</option>
      <option value="5minutes">5 minutes before</option>
      <option value="15minutes">15 minutes before</option>
      <option value="30minutes">30 minutes before</option>
      <option value="1hour">1 hour before</option>
    </select>
                  </fieldset>
                  <div className="form-button-container">
                    <button type="button" className="form-button cancel-button" id="closeModal">
                      Close
                    </button>
                    <button type="submit" className="form-button save-button" onClick={handleCreateMeeting}>
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
                <th>Title</th>
                <th>From</th>
                <th>To</th>
                <th>Related To</th>
                <th>Contact</th>
                <th>Host</th>
              </tr>
            </thead1>
            <tbody1>
              {meetings.map(meeting => (
                <tr key={meeting.id}>
                  <td>{meeting.Title}</td>
                  <td>{meeting.From}</td>
                  <td>{meeting.To}</td>
                  <td>{meeting.RelatedTo}</td>
                  <td>{meeting.ContactName}</td>
                  <td>{meeting.Host}</td>
                </tr>
              ))}
            </tbody1>
          </table1>
        </div>
      </div>
    </div>
  );
};

export default Met;
