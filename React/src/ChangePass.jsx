import Layout from './Layout';
import person from './assets/person.png';
import { userData, updateUserData } from './api/Session';
import styles from './ChangePass.module.css';
import React, { useState, useEffect } from 'react';
import { updateUser, checkEmail } from './api/Node';
import { useNavigate } from 'react-router-dom';
import { sha256 } from 'js-sha256';

//Update Profile to has input for adding more info
export default function ChangePass() {
  const [currentPassword, setCurrentPassword] = useState();
  const [inputPassword, setinputPassword] = useState();
  const [cfPassword, setCfpassword] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChangePass = async (event) => {
    event.preventDefault();
    const email = userData.email;

    if (!currentPassword || currentPassword.length < 6) {
      setError('Current Password must be at least 6 characters long');
      return;
    }

    if (!inputPassword || inputPassword.length < 6) {
      setError('New password must be at least 6 characters long');
      return;
    }

    if (!cfPassword || cfPassword.length < 6) {
      setError('Confirm Password must be at least 6 characters long');
      return;
    }

    if (inputPassword !== cfPassword) {
      setError('Password and confirm password does not match');
      return;
    }

    try {
      const user = await checkEmail(email);
      const passwordHash = sha256(currentPassword);

      if (user.password !== passwordHash) {
        setError('Current password mismatch');
        return;
      }

      const _id = user._id;
      const password = sha256(inputPassword);

      const updatePass = {
        email: user.email,
        username: user.username,
        password,
        birthdate: user.birthdate,
        weight: user.weight,
        height: user.height,
      };

      const userNow = await updateUser(_id, updatePass);

      alert(`Your Passwords have been updated`);
      setCurrentPassword('');
      setinputPassword('');
      setCfpassword('');
      navigate('/Dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className='container text-center'>
        <img src={person} style={{ width: '20%' }} className='rounded' />
        <h2 className='mt-4'>Hello {userData && userData.username}</h2>

        <div className={`mt-3 ${styles.profileForm}`}>
          <h2>Please update your password</h2>
          <form className='mt-4'>
            <input
              type='password'
              placeholder='Current Password'
              style={{ margin: '4px' }}
              onChange={(event) => setCurrentPassword(event.target.value)}
            />
            <br />
            <br />
            <input
              type='password'
              placeholder='New Password'
              style={{ margin: '4px' }}
              onChange={(event) => setinputPassword(event.target.value)}
            />
            <br />
            <br />
            <input
              type='password'
              placeholder='Confirm Password'
              style={{ margin: '4px' }}
              onChange={(event) => setCfpassword(event.target.value)}
            />
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>} <br />
            <button onClick={handleChangePass}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
