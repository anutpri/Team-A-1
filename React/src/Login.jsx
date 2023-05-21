import Layout from './Layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { checkEmail } from "./api/Node";
import { userData, updateUserData } from "./api/Session";
import { sha256 } from 'js-sha256';

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  

  const handleLogin = async (event) => {
    event.preventDefault();

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Check if password meets minimum requirements
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const user = await checkEmail(email);
      
      updateUserData(user);
      console.log(userData);

      // Hash the input password using SHA-256
      const passwordHash = sha256(password);
      console.log(passwordHash);

      // Check if email and password match a user
      if (user.email === email && user.password === passwordHash) {
        // If a user is found and password matches, the login is successful
        alert('Login successful!');
        navigate('/Dashboard');
      } else {
        // If a user is not found or password doesn't match, display an error message
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error getting user:', error);
      setError('Email not found. Please try again.');
    }
  };

  const gotoForgetPassword = () => {
    navigate('/ForgetPass');
  };

  return (
    <Layout>
      <div className='header'>
        <div className='title'>
          <p>Sign In to</p>
          <p>Change</p>
          <p>Your Life</p> <br />
          <p id='if'>
            If you don't have an account <br></br>
            <span>you can</span>{' '}
            <a className='Regis' href={'/Signup'}>
              Register Here!
            </a>
          </p>
        </div>
      </div>

      <div className='Login'>
        <input
          type='text'
          placeholder='Enter Email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type='password'
          placeholder='Password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <br></br>
        <a className='Forgot' onClick={gotoForgetPassword}>Forgot Password?</a>
        <br></br>
        <br></br>
        {error && <p style={{ color: 'red' }}>{error}</p>}{' '}
        {/* Display the error message */}
        <button onClick={handleLogin}>Sign In</button>
      </div>
    </Layout>
  );
};

export default Login;
