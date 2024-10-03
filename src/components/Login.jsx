import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5050/login", { email, password })
      .then((response) => {
        console.log(response.data); // handle success
      })
      .catch((error) => {
        console.error("There was an error!", error); // handle error
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="heading">Login</h2>
        <div className="inputGroup">
          <label htmlFor="Email" className="label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Password" className="label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
