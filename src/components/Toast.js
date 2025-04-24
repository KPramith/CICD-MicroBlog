import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ visible, message, isSuccess }) => {
  return (
    <div className={`toast ${visible ? 'show' : ''}`}>
      <div className="toast-content">
        <FontAwesomeIcon 
          icon={isSuccess ? faCheckCircle : faExclamationCircle} 
          className={`toast-icon ${isSuccess ? 'success' : 'error'}`} 
        />
        <div className="toast-message">{message}</div>
      </div>
    </div>
  );
};

export default Toast;