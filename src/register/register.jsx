import React from 'react';

export function Register() {
  return (
    <main>
      <h1>Register</h1>
      <form id="register-form">
          <div className="register-form">
              <label for="username">Username</label><br></br>
              <input type="text" id="username-input" name="username" value=""></input><br></br>
              <label for="zip">Zip Code</label><br></br>
              <input type="number" id="zip" name="zip" minlength="5" maxlength="5"></input><br></br>
              <label for="password">Password</label><br></br>
              <input type="password" id="password" name="password" value=""></input><br></br>
              <label for="password-confirm">Confirm password</label><br></br>
              <input type="password" id="password-confirm" name="password-confirm" value=""></input><br></br>
              <input type="submit" className="form-button" value="Submit"></input>
          </div>
      </form> 
      <div id="error-message"></div>
        </main>
  );
}
