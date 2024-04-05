import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ComposeEmail = ({ onClose }) => {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [messageBody, setMessageBody] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleSend = () => {
    // Validate email address and required fields
    if (to && subject && messageBody) {
      // Implement send email logic
      // Reset form and close popup
      setTo('');
      setSubject('');
      setMessageBody('');
      setAttachments([]);
      onClose();
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleAttachFile = (e) => {
    const file = e.target.files[0];
    setAttachments([...attachments, file]);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>Compose Email</h2>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input type="email" id="to" className="form-control" value={to} onChange={(e) => setTo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" className="form-control" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="messageBody">Message Body:</label>
          <textarea id="messageBody" className="form-control" value={messageBody} onChange={(e) => setMessageBody(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="attachments">Attachments:</label>
          <input type="file" id="attachments" className="form-control-file" onChange={handleAttachFile} />
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={handleSend}>Send</button>
          <button className="btn btn-secondary">Save as Draft</button>
          <button className="btn btn-danger" onClick={onClose}>Discard</button>
        </div>
      </div>
    </div>
  );
};

export default ComposeEmail;
