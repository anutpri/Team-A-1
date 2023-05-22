import React, { useState } from "react";
import Layout from "./Layout";
import forget from "./assets/forget.jpg";
import styles from "./ForgetPassword.module.css";
import { sendEmail } from './api/Node';
import { sha256 } from 'js-sha256';

export default function ForgetPassword() {
  const [email, setEmail] = useState();

  const handleForgetFormSubmit = (event) => {
    event.preventDefault();

  const newPass = '123456789';
  // const hashPass = sha256(newPass);
    
    sendEmail(email, newPass);
    alert(`Sorry for the inconvenience. This feature is under development; Please take a deep breath and re-think your password again.`);
    setEmail('');
  };

  return (
    <Layout>
      <div className="container text-center">
        <img src={forget} style={{ width: "30%" }} className="rounded" />
        <div className={`mt-5 ${styles.forgetForm}`}>
          <h4>Forget Password? Please enter your email</h4>
          <form className="mt-4" onSubmit={handleForgetFormSubmit}>
            <input
              type="text"
              placeholder="Email"
              style={{ margin: "4px" }}
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
