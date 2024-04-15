import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CLIENT_ID =  "667498046930-3df54a3fajc619jhqoumfn6go8cplpcj.apps.googleusercontent.com"; 
const REDIRECT_URI = 'http://localhost:5173/compose'; // Update with your redirect URI
const SCOPES = 'https://www.googleapis.com/auth/gmail.send'; // Scopes required for Gmail API access

const ComposeEmail = () => {
  const [accessToken, setAccessToken] = useState('');
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const parseAccessToken = () => {
      const hash = window.location.hash.substr(1);
      const queryParams = new URLSearchParams(hash);
      const accessToken = queryParams.get('access_token');
      if (accessToken) {
        setAccessToken(accessToken);
      }
    };

    if (window.location.hash) {
      parseAccessToken();
    }
  }, []);

  const handleAuthClick = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(
      SCOPES
    )}&response_type=token`;

    window.location.href = authUrl;
  };

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        'https://www.googleapis.com/gmail/v1/users/me/messages/send',
        {
          raw: btoa(`To: ${to}\r\nSubject: ${subject}\r\n\r\n${body}`),
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Email sent:', response.data);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <div>
      {!accessToken ? (
        <button onClick={handleAuthClick}>Authorize</button>
      ) : (
        <div>
          <h2>Compose Email</h2>
          <label>To:</label>
          <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
          <br />
          <label>Subject:</label>
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <br />
          <label>Body:</label>
          <textarea rows="5" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
          <br />
          <button onClick={handleSendEmail}>Send Email</button>
        </div>
      )}
    </div>
  );
};

export default ComposeEmail;


        