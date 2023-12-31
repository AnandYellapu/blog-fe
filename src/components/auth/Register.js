// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to register a new user
      await axios.post('https://blog-sl4b.onrender.com/api/users/register', { username, email, password });

      toast.success('Successfully registered!');
      navigate('/login');
    } catch (error) {
      console.error(error);

      if (error.response && error.response.status === 400) {
        // 409 Conflict status code indicates that the username or email already exists
        toast.error('Username or email already exists. Please choose a different one.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
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

  

  