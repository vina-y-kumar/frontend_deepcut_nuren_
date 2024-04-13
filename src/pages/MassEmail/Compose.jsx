import React, { useState } from 'react';
// import { google } from 'googleapis'; // Import the Google API library
import { Button, Form } from 'react-bootstrap';

const EmailComponent = () => {
  const [subject, setSubject] = useState('');
  const [recipient, setRecipient] = useState('');
  const [body, setBody] = useState('');

  const sendEmail = async () => {
    try {
      const auth = new google.auth.GoogleAuth({
        // Set up OAuth 2.0 authentication
        clientId: 'YOUR_CLIENT_ID',
        clientSecret: 'YOUR_CLIENT_SECRET',
        redirectUri: 'YOUR_REDIRECT_URI',
      });
      const gmail = google.gmail({ version: 'v1', auth });

      await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: btoa(
            `From: YOUR_EMAIL_ADDRESS\r\nTo: ${recipient}\r\nSubject: ${subject}\r\n\r\n${body}`
          ),
        },
      });

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <Form>
      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="recipient">
        <Form.Label>Recipient</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter recipient email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="body">
        <Form.Label>Email Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter email body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={sendEmail}>
        Send Email
      </Button>
    </Form>
  );
};

export default EmailComponent;
