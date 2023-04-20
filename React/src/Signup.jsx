import Layout from "./Layout";
// import { Context } from "./UserContext"
// import { useContext } from "react"
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const navigate = useNavigate();

  // const { signup } = useContext(Context)

  // in order to sign up, users have to fill all the inputs
  //   useEffect(() => {
  //     setName("");
  //     setLastname("");
  //     setEmail("");
  //     setPassword("");
  //   }, [props.employees]);

  return (
    <Layout>
      <div class="header">
        <div class="create">
          <h1>Create Account</h1>
        </div>
      </div>
      {/* <label class="withFB">Sign up with Facebook </label>
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
          type="text"
          placeholder="Username *"
          style={{ margin: "4px" }}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <br />
        {/* <label>Email</label> <br></br> */}
        <input
          type="email"
          placeholder="Email *"
          style={{ margin: "4px" }}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <br />
        {/* <label>Password</label> <br></br> */}
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
        <button onClick={() => signup({})}>Create Account</button>
        <br />
        <br /> <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </Layout>
  );
};

export default Signup;
