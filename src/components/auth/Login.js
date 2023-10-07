// // src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';  // Import the toast module

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make a POST request to log in the user
//       const response = await axios.post('https://blog-sl4b.onrender.com/api/users/login', { email, password });

//       // Store the token in local storage or a state management solution
//       sessionStorage.setItem('token', response.data.token);

//       // Display success notification
//       toast.success('Login successful!');

//       // Optionally, you can redirect to the home page or handle the response accordingly
//       navigate('/');
//     } catch (error) {
//       console.error(error);

//       // Display error notification
//       toast.error('Invalid credentials. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit} className="login-form">
//         <label className="login-label">Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="login-input" />

//         <label className="login-label">Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" />

//         <button type="submit" className="login-button">Login</button>
//       </form>

//       <p className="register-link">
//         Not Yet Registered? <Link to="/register" className="register-link">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;





// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import ForgotPassword from './ForgotPassword'; // Import the new component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to log in the user
      const response = await axios.post('https://blog-sl4b.onrender.com/api/users/login', { email, password });

      // Store the token in local storage or a state management solution
      sessionStorage.setItem('token', response.data.token);

      // Display success notification
      toast.success('Login successful!');

      // Optionally, you can redirect to the home page or handle the response accordingly
      navigate('/');
    } catch (error) {
      console.error(error);

      // Display error notification
      toast.error('Invalid credentials. Please try again.');
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

      <p className="forgot-password-link">
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
      </p>

      <p className="register-link">
        Not Yet Registered? <Link to="/register" className="register-link">Register</Link>
      </p>
    </div>
  );
};

export default Login;



