// Modal2.js
import React from 'react';

const Modal2 = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal 2</h2>
        <p>Modal 2 content here...</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal2;
