import Layout from "./Layout";
// import { Context } from "./UserContext"
// import { useContext } from "react"
import React, { useState } from "react";
import { useEffect } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <div>
        <label>Create New Account</label>
        <br />
        <br />
        <label class="withFB">Sign up with Facebook </label>
        <br />
        <label class="withGG">Sign up with Google</label>
        <br />
        <label class="withAP">Sign up with Apple</label>
        <br />
        <br />
        <a>- OR -</a>
        <br />
        <br />
        {/* <label>Name</label> <br></br> */}
        <input
          type="text"
          placeholder="First Name *"
          style={{ margin: "4px" }}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        {/* <label>Last Name</label> <br></br> */}
        <input
          type="text"
          placeholder="Last Name *"
          style={{ margin: "4px" }}
          onChange={(event) => setLastName(event.target.value)}
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
        <button onClick={() => signup({})}>Create Account</button>
        <br />
        <br /> <button>Cancel</button>
      </div>
    </Layout>
  );
};

export default Signup;
