import axios from 'axios';
import React, { useState } from 'react';
// import './MassEmailComponent.css'; // Import CSS file for styling

const MassEmailComponent = ({accessToken}) => {
  const [recipients, setRecipients] = useState('');
  const [template, setTemplate] = useState('');
  const [from, setFrom] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [sendOption, setSendOption] = useState('sendNow');
  const [scheduledTime, setScheduledTime] = useState('');

  const handleSendNow = async () => {
    try {
      const formData=new FormData();
      formData.append('raw',
      `To: ${recipients}\r\nSubject: ${template}\r\nFrom: ${from}\r\nReply-To: ${replyTo}\r\n\r\n`)
      const response = await axios.post(
        'https://www.googleapis.com/gmail/v1/users/me/messages/send',
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Email sent:', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  const handleSendLater = () => {
    // Logic for scheduling email
    alert('Email scheduled for later to: ' + recipients + ' at ' + scheduledTime);
  };

  return (
    <div className="mass-email-container">
      <h2>Compose Mass Email</h2>
      <div className="form-group">
        <label htmlFor="recipients">To:</label>
        <input
          type="text"
          id="recipients"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          placeholder="Enter recipients' email addresses (comma-separated)"
        />
      </div>
      <div className="form-group">
        <label htmlFor="template">Select Template:</label>
        <select id="template" value={template} onChange={(e) => setTemplate(e.target.value)}>
          <option value="">Select a template</option>
          <option value="template1">Template 1</option>
          <option value="template2">Template 2</option>
          <option value="template3">Template 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="from">From:</label>
        <input type="text" id="from" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="replyTo">Reply-To:</label>
        <input type="text" id="replyTo" value={replyTo} onChange={(e) => setReplyTo(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Send Option:</label>
        <div>
          <input
            type="radio"
            id="sendNow"
            value="sendNow"
            checked={sendOption === 'sendNow'}
            onChange={() => setSendOption('sendNow')}
          />
          <label htmlFor="sendNow">Send Now</label>
        </div>
        <div>
          <input
            type="radio"
            id="sendLater"
            value="sendLater"
            checked={sendOption === 'sendLater'}
            onChange={() => setSendOption('sendLater')}
          />
          <label htmlFor="sendLater">Send Later:</label>
          {sendOption === 'sendLater' && (
            <input
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
            />
          )}
        </div>
      </div>
      <div className="form-group">
        <button className="send-email-button" onClick={sendOption === 'sendNow' ? handleSendNow : handleSendLater}>
          {sendOption === 'sendNow' ? 'Send Now' : 'Schedule'}
        </button>
      </div>
    </div>
  );
};

export default MassEmailComponent;
