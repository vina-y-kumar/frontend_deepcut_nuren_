import React, { useState, useEffect } from 'react';
import "./meetings.css";
import { Sidebar } from "../../components/Sidebar";

const Met = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      Title: "Demo",
      From: "2024-03-28 09:00",
      To: "2024-03-28 10:00",
      RelatedTo: "Project A",
      ContactName: "John Doe",
      Host: "Alice"
    },
    {
      id: 2,
      Title: "Webinar",
      From: "2024-03-28 10:30",
      To: "2024-03-28 11:30",
      RelatedTo: "Project B",
      ContactName: "Jane Smith",
      Host: "Bob"
    },
    {
      id: 3,
      Title: "TradeShow",
      From: "2024-04-28 10:30",
      To: "2024-04-28 11:30",
      RelatedTo: "Project c",
      ContactName: "Ashley",
      Host: "Bob"
    },
    {
      id: 4,
      Title: "Webinar",
      From: "2024-05-28 10:30",
      To: "2024-05-28 11:30",
      RelatedTo: "Project d",
      ContactName: "Bobby",
      Host: "Bob"
    },
    {
      id: 5,
      Title: "Seminar",
      From: "2024-06-28 10:30",
      To: "2024-06-28 11:30",
      RelatedTo: "Project d",
      ContactName: "Bobby",
      Host: "Bob"
    },
    {
      id: 6,
      Title: "Attend Customer conference",
      From: "2024-07-28 10:30",
      To: "2024-07-28 11:30",
      RelatedTo: "Project E",
      ContactName: "Sam",
      Host: "Bob"
    },
    {
      id: 7,
      Title: "Webinar",
      From: "2024-07-29 10:30",
      To: "2024-07-29 11:30",
      RelatedTo: "Project F",
      ContactName: "Sujoy",
      Host: "Bob"
    },
    {
      id: 8,
      Title: "Webinar",
      From: "2024-07-29 10:30",
      To: "2024-07-29 11:30",
      RelatedTo: "Project F",
      ContactName: "Sujoy",
      Host: "Bob"
    },
    {
      id: 9,
      Title: "Webinar",
      From: "2024-07-29 10:30",
      To: "2024-07-29 11:30",
      RelatedTo: "Project F",
      ContactName: "Sujoy",
      Host: "Bob"
    },
    {
      id: 10,
      Title: "Webinar",
      From: "2024-07-29 10:30",
      To: "2024-07-29 11:30",
      RelatedTo: "Project F",
      ContactName: "Sujoy",
      Host: "Bob"
    },
  ]);

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

  const handleCreateMeeting = () => {
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
