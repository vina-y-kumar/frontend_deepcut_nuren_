import React, { useState } from 'react';
// import ComposeEmailPopup from './ComposeEmailPopup';
import ComposeEmail from './Compose';

const Main = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleComposeEmail = ({ to, subject, body }) => {
    // Implement email sending logic here
    console.log('Sending email to:', to);
    console.log('Subject:', subject);
    console.log('Body:', body);
  };

  return (
    <div>
      <h1>Main </h1>
      <button onClick={handleShowPopup}>Compose Email</button>
      <ComposeEmail />
    </div>
  );
};

export default Main;
