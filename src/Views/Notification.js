import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function Notification() {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div className="d-flex justify-content-end">
      <Button onClick={toggleToast}>Show Toast</Button>

      <Toast
        show={showToast}
        onClose={toggleToast}
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
        }}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">Toast Example</strong>
        </Toast.Header>
        <Toast.Body>This is a bottom-end toast message.</Toast.Body>
      </Toast>
    </div>
  );
}



export default Notification;