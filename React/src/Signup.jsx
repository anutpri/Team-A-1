import Layout from "./Layout";
// import { Context } from "./UserContext"
// import { useContext } from "react"
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

// useState = when users hit submit button you can send the data to the backend API
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [error, setError] = useState(null);

  // to navigate the cancel button to main
  const navigate = useNavigate();

  // to maintain all the states so that on submit button you can send all the required information to the backend APIs
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "userName") {
      setUserName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "cfPassword") {
      setCfPassword(value);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Check if password meets minimum requirements
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    } else {
      // If a user is not found, display an error message
      setError("Invalid email or password");
    }

    // console.log(userName, email, password, cfPassword);
  };

  return (
    <Layout>
      <div class="header">
        <div class="create">
          <h1>Create Account</h1>
        </div>
      </div>

      {/* 
      In case if we want to add this feature in the future

      <label class="withFB">Sign up with Facebook </label>
        <br />
        <label class="withGG">Sign up with Google</label>
        <br />
        <label class="withAP">Sign up with Apple</label>
        <br />
        <br />
        <a>- OR -</a>
        <br />
        <br /> */}

      <div class="Signup">
        <input
          value={userName}
          type="text"
          placeholder="Username *"
          style={{ margin: "4px" }}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <br />
        <input
          value={email}
          type="email"
          placeholder="Email *"
          style={{ margin: "4px" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        <input
          value={password}
          type="password"
          placeholder="Password *"
          style={{ margin: "4px" }}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />
        <input
          value={cfPassword}
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
