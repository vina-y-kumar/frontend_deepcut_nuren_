import React, { useState } from 'react';
import axios from 'axios';

const ComposeEmailComponent = ({
  accessToken,
  to,
  setTo,
  subject,
  setSubject,
  body,
  setBody,
  handleSendEmail,
}

) => {
    const [attachments, setAttachments] = useState([]);
    const handleAttachmentChange = (e) => {
        const files = Array.from(e.target.files);
        setAttachments(files);
      };
    
      const removeAttachment = (index) => {
        const updatedAttachments = [...attachments];
        updatedAttachments.splice(index, 1);
        setAttachments(updatedAttachments);
      };
    
    const handleSendEmailWithAttachments = async () => {
        const formData = new FormData();
        formData.append('raw', btoa(
            `To: ${to}\r\nSubject: ${subject}\r\n\r\n${body}\n${attachments}`
          ));
    
        attachments.forEach((file, index) => {
          formData.append(`attachment${index + 1}`, file);
        }
    );
    
        try {
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
    
          console.log('Email sent with attachments:', formData);
          alert('Email sent successfully with attachments!');
        } catch (error) {
          console.error('Error sending email with attachments:', error);
          alert('Error sending email with attachments. Please try again.');
        }
      };
  return (
    <div className='compose-email-container'>
      <h2 className="">Compose Email</h2>
      <form>
        <div className="">
          <label htmlFor="inputEmail" className="">To:</label>
          <input
            type="email"
            className=""
            id="inputEmail"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="inputSubject" className="">Subject:</label>
          <input
            type="text"
            className=""
            id="inputSubject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="inputBody" className="">Body:</label>
          <textarea
            className=""
            id="inputBody"
            rows="5"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <br />
        <label>Attachments:</label>
      <input type="file" multiple onChange={handleAttachmentChange} />
      {attachments.length > 0 && (
        <ul>
          {attachments.map((file, index) => (
            <li key={index}>
              {file.name} - <button onClick={() => removeAttachment(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
        <button type="button" className="send-email-button" onClick={handleSendEmailWithAttachments}>Send Email</button>
      </form>
    </div>
  );
};

export default ComposeEmailComponent;
