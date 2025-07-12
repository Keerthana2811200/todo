// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from '../utils/auth';
import './Home.css'; // link to the CSS file


export default function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
      saveToken(token);
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Add your own email/password logic here if needed
    alert(`Logging in with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Welcome to Todo App</h1>

      <form onSubmit={handleEmailLogin} className="login-form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn">Login with Email</button>
      </form>

      <div className="divider">or</div>

      <button onClick={handleGoogleLogin} className="btn google">
        Continue with Google
      </button>
    </div>
  );
}
