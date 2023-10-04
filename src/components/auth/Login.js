// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using react-router for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to log in the user
      const response = await axios.post('http://localhost:1200/api/users/login', { email, password });

      // Store the token in local storage or a state management solution
      sessionStorage.setItem('token', response.data.token);

      // Optionally, you can redirect to the home page or handle the response accordingly
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-label">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login-input" />

        <label className="login-label">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" />

        <button type="submit" className="login-button">Login</button>
      </form>

      <p className="register-link">
        Not Yet Registered? <Link to="/register" className="register-link">Register</Link>
      </p>
    </div>
  );
};

export default Login;
