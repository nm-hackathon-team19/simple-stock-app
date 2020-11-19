import React, { useState } from "react";
import './Static.css';


function Login(props) {
  if (!props.show) {
    return null
  } else {
    return (
      <div id="register-modal" className="modal">
        <div className="modal-content">
          <form>
            <div className="container">

              <span className="close" onClick={props.toggleModal}>&times;</span>

              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="username" required />

              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <label>
                <input type="checkbox" checked="checked" name="remember" defaultChecked /> Remember me</label>

              <p>By creating an account you agree to our <a >Terms & Privacy</a>.</p>

              <div className="clearfix">
                <button type="submit" className="signupbtn loginbtn">Sign Up</button>
              </div>
              <div className="container" >
                <button type="button" className="cancelbtn" onClick={props.toggleModal}>Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>

              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
};

export default Login;