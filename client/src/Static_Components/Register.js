import React, { useState } from "react";
import './Static.css';

function Register(props) {
  if (!props.show) {
    return null
  } else {
    return (
      <div id="register-modal" className="modal">
        <div className="modal-content">
          <form>
            <div className="container">

              <span className="close" onClick={props.toggleModal}>&times;</span>

              <label htmlFor="email"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required />

              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="username" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
              <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

              <label>
                <input type="checkbox" checked="checked" name="remember" defaultChecked /> Remember me</label>

              <p>By creating an account you agree to our <a >Terms & Privacy</a>.</p>

              <div className="clearfix">
                <button type="button" className="cancelbtn" onClick={props.toggleModal}>Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
};

export default Register;