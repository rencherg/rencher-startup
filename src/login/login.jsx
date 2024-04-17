import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestData = {
      username: username,
      password: password
    };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        // throw new Error('Network response was not ok');
        console.log('network issue')
      }
  
      const responseBody = await response.json();

      if(responseBody.message === "success"){
          localStorage.setItem("loggedIn", true)
          localStorage.setItem("currentUser", username)
          localStorage.setItem("zipcode", responseBody.userZip)
          window.location.href = "/";
      } else {
          setErrorMessage('Incorrect Username/Password');
      }
      
    } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
        setErrorMessage('Error: Please try again later.');
    }
  };

  return (
    <main>
      <form id="login-form" onSubmit={handleSubmit}>
          <div className="login-form">
              <h1>Login</h1>
              <br />
              <label htmlFor="usernameInput">Username</label><br />
              <input type="text" id="usernameInput" name="username" value={username} onChange={handleUsernameChange} /><br />
              <label htmlFor="password">Password</label><br />
              <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange}/><br />
              <input className="form-button" type="submit" value="Submit" />
          </div>
      </form>
      <p className="form-content">Don't have an account? <NavLink className="main-link" to='/register'>Sign up!</NavLink></p>
      <div id="incorrectDiv">{errorMessage}</div>
      
      <img className="form-img" src="https://miro.medium.com/v2/resize:fit:1040/1*QggSrc9qoOMYXwlnneA1Ww.jpeg" alt="Matrix" />
      <p className="form-content">Dare to take the red pill</p>
    </main>
  );
}