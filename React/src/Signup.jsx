import Layout from "./Layout";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { createUser, checkEmail } from "./api/Node";
import { userData, updateUserData } from "./api/Session";
import { sha256 } from 'js-sha256';

// useState = when users hit submit button you can send the data to the backend API
const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [error, setError] = useState(null);

  // to navigate the cancel button to main
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    if (username.length < 6) {
      setError("Username must be at least 6 characters long");
      return;
    } 
//wait to implement check duplicate username later

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    //Check if password meets minimum requirements
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } 

    if (password !== cfPassword) {
      setError("Password and confirm password does not match");
      return;
    } 

    const newuser = {
      username,
      email,
      password: sha256(password), // Encrypt the password
    };
    
    try {
      await createUser(newuser);
      updateUserData(newuser);
      alert('Register successfully!');

    // navigate to the Dashboard page
      navigate('/Dashboard');
    } catch (error) {
      setError('A username or email has already been used.');
    }

  };

  return (
    <Layout>
      <div className="header">
        <div className="create">
          <h1>Create Account</h1>
        </div>
      </div>

      

      <div className="Signup">
        <input
          
          type="text"
          placeholder="Username *"
          style={{ margin: "4px" }}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <br />
        <input
          
          type="email"
          placeholder="Email *"
          style={{ margin: "4px" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <input
          
          type="password"
          placeholder="Password *"
          style={{ margin: "4px" }}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <input
          
          type="password"
          placeholder="Confirm Password *"
          style={{ margin: "4px" }}
          onChange={(event) => setCfPassword(event.target.value)}
        />
        <br />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}{" "}
        {/* Display the error message */}
        <button onClick={handleSignup}>Submit</button>
        {/* <button onClick={() => signup({})}>Submit</button> */}
        <br />
        <br /> <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </Layout>
  );
};

export default Signup;
