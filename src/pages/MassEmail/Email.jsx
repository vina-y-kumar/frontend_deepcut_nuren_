import React, { useState } from 'react';
import { Form, Button, DropdownButton, Dropdown, Popover, OverlayTrigger } from 'react-bootstrap';
import './email.css'; // Import custom CSS for styling

const MassEmail = () => {
  const [to, setTo] = useState('');
  const [template, setTemplate] = useState('');
  const [from, setFrom] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [sendOption, setSendOption] = useState('immediate');
  const [scheduleDateTime, setScheduleDateTime] = useState('');
  const [composeEmailOpen, setComposeEmailOpen] = useState(false);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [emailTo,setEmailTo]=useState('');

  const handleSendEmail = () => {
    // Logic to send the email based on selected options
    console.log(to);
    console.log(template);
    console.log(from);
    console.log(replyTo);
    console.log(sendOption);
    console.log(scheduleDateTime);

    setTo('');
    setFrom('');
    setReplyTo('');
    setSendOption('');
    setTemplate('');
  };

  const handleScheduleEmail = () => {
    // Logic to schedule the email for later
    console.log('Email scheduled for:', scheduleDateTime);
  };

  const handleSendOptionChange = (option) => {
    setSendOption(option);
    if (option === 'schedule') {
      // Prompt user to input date and time for scheduling
    //   const scheduleDateTime = prompt('Enter date and time for scheduling (YYYY-MM-DD HH:mm)');
      setScheduleDateTime(scheduleDateTime);
    }
  };
  const renderAttachments = () => {
    return attachments.map((file, index) => (
      <div key={index} className="attachment-item">
        {file.name} 
        <button type="button" onClick={() => removeAttachment(index)}>Remove</button>
      </div>
    ));
  };

  //compose email
  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const removeAttachment = (index) => {
    const updatedAttachments = attachments.filter((_, i) => i !== index);
    setAttachments(updatedAttachments);
  };
  const handleSendEmail1 = () => {
    // Logic to send the email based on selected options
    console.log(emailTo);
    console.log(emailSubject);
    console.log(emailBody);
    // console.log(replyTo);
  

    setEmailBody('');
    setEmailSubject('');
    setEmailTo('');
  
  };
  const handleScheduleEmail1 = () => {
    // Logic to schedule the email for later
    const scheduleDate=prompt('Enter The Rescheduling Date')
    console.log('Email scheduled for:', scheduleDate);
  };

  return (
    <div className="mass-email-container">
      <h2 className="mass-email-heading">Mass Email Component</h2>
      <Form className="mass-email-form">
        <Form.Group controlId="formTo">
          <Form.Label>To</Form.Label>
          {/* <DropdownButton title="Select Contacts" variant="primary">
            <Dropdown.Item onSelect={() => setTo('all')}>All Contacts</Dropdown.Item>
            <Dropdown.Item onSelect={() => setTo('recent')}>Recent Contacts</Dropdown.Item>
            <Dropdown.Item onSelect={() => setTo('old')}>Old Contacts</Dropdown.Item>
          </DropdownButton> */}
          <Form.Control as="select" onChange={(e) => setTo(e.target.value)} custom>
            <option onSelect={() => setTo('all')}>All Contacts</option>
            <option onSelect={() => setTo('recent')}>Recent Contacts</option>
            <option onSelect={() => setTo('old')}>Old Contacts</option>
            {/* Add more template options */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formTemplate">
          <Form.Label>Template</Form.Label>
          <Form.Control as="select" onChange={(e) => setTemplate(e.target.value)} custom>
            <option value="">Select Template</option>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
            {/* Add more template options */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formFrom">
          <Form.Label>From (Email)</Form.Label>
          <Form.Control type="email" placeholder="Enter sender's email" value={from} onChange={(e) => setFrom(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formReplyTo">
          <Form.Label>Reply To (Email)</Form.Label>
          <Form.Control type="email" placeholder="Enter reply-to email" value={replyTo} onChange={(e) => setReplyTo(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formSendOption">
          <Form.Label>Send Options</Form.Label>
          <div className="send-option-radio">
            <Form.Check
              type="radio"
              label="Send Immediately"
              name="sendOption"
              checked={sendOption === 'immediate'}
              onChange={() => handleSendOptionChange('immediate')}
              inline
            />
            <Form.Check
              type="radio"
              label="Schedule for Later"
              name="sendOption"
              checked={sendOption === 'schedule'}
              onChange={() => handleSendOptionChange('schedule')}
              inline
            />
          </div>
        </Form.Group>

        {sendOption === 'schedule' && (
          <Form.Group controlId="formScheduleDateTime">
            <Form.Label>Schedule Date</Form.Label>
            <Form.Control type="date" value={scheduleDateTime} onChange={(e) => setScheduleDateTime(e.target.value)} />
          </Form.Group>
        )}

        <Button variant="primary" onClick={sendOption === 'schedule' ? handleScheduleEmail : handleSendEmail}>
          {sendOption === 'schedule' ? 'Schedule Email' : 'Send Email'}
        </Button>

        <Button variant="primary" className='btn2' onClick={() => setComposeEmailOpen(!composeEmailOpen)}>
          Compose Email
        </Button>

        {composeEmailOpen && (
          <div className="compose-email-container">
            <h3>Compose Email</h3>
            <Form.Group controlId="formComposeEmail">
              <Form.Label>To:</Form.Label>
              <Form.Control type="text" value={emailTo} onChange={(e) => setEmailTo(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formComposeSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formComposeBody">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" rows={5} value={emailBody} onChange={(e) => setEmailBody(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formComposeAttachments">
              <Form.Label>Attachments</Form.Label>
              <Form.Control type="file" multiple onChange={handleAttachmentChange} />
            </Form.Group>

            {attachments.length > 0 && (
              <div>
                <h5>Attachments:</h5>
                {renderAttachments()}
              </div>
            )}

<div className="button-container">
  <Button variant="primary" className='btn1' onClick={handleSendEmail1}>Send Now</Button>
  <Button variant="primary" className='btn2'onClick={handleScheduleEmail1}>Send Later</Button>
</div>
          </div>
        )}
      </Form>
    </div>
  );
};

export default MassEmail;
