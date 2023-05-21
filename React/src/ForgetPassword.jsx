import React, { useState } from "react";
import Layout from "./Layout";
import forget from "./assets/forget.jpg";
import styles from "./ForgetPassword.module.css";

export default function ForgetPassword() {
  const [email, setEmail] = useState();

  const handleForgetFormSubmit = (event) => {
    event.preventDefault();
    alert(`Your email is ${email}`);
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
              value={email}
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
