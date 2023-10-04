
// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming you are using react-router for navigation

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to register a new user
      await axios.post('http://localhost:1200/api/users/register', { username, email, password });

      // Optionally, you can redirect to the login page or handle the response accordingly
      // history.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label className="register-label">Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="register-input" />

        <label className="register-label">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="register-input" />

        <label className="register-label">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="register-input" />

        <button type="submit" className="register-button">Register</button>
      </form>

      <p className="login-link">
        Already registered? <Link to="/login" className="login-link">Login</Link>
      </p>
    </div>
  );
};

export default Register;
