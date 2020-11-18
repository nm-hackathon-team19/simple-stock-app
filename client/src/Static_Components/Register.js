import React, { useState } from "react";
import './Static.css';

function Register(props) {
  if (!props.show) {
    return null
  } else {
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.toggleModal}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>

    );
  }
};

export default Register;