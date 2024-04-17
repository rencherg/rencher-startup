import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
    <main>
      <form id="login-form">
          <div className="login-form">
              <h1>Login</h1>
              <br />
              <label htmlFor="username">Username</label><br />
              <input type="text" id="usernameInput" name="username" value="" /><br />
              <label htmlFor="password">Password</label><br />
              <input type="password" id="password" name="password" value="" /><br />
              <input className="form-button" type="submit" value="Submit" />
          </div>
      </form>
      <p className="form-content">Don't have an account? <NavLink className="main-link" to='/register'>Sign up!</NavLink></p>
      <div id="incorrectDiv"></div>
      
      <img className="form-img" src="https://miro.medium.com/v2/resize:fit:1040/1*QggSrc9qoOMYXwlnneA1Ww.jpeg" />
      <p className="form-content">Dare to take the red pill</p>
    </main>
  );
}