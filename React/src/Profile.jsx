import Layout from './Layout';
import person from './assets/person.png';
import { userData, updateUserData } from './api/Session';
import styles from './Profile.module.css';
import React, { useState, useEffect } from 'react';
import { updateUser, checkEmail } from './api/Node';
import { useNavigate } from 'react-router-dom';

//Update Profile to has input for adding more info
export default function Profile() {
  const [userInfo, setUserInfo] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const email = userData.email;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showData = await checkEmail(email);

        if (showData) {
          setUserInfo(showData);
          setBirthdate(showData.birthdate);
          setWeight(showData.weight);
          setHeight(showData.height);
        } else {
          setError('Error: User not found');
        }
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  const handleAddMoreInfo = async (event) => {
    event.preventDefault();

    try {
      const _id = userInfo._id;
      const updatedData = {
        email: userInfo.email,
        username: userInfo.username,
        password: userInfo.password,
        birthdate,
        weight,
        height,
      };

      const userNow = await updateUser(_id, updatedData);

      alert(
        `Updated Info: BirthDate->${birthdate}, Weight->${weight}, Height->${height}`
      );
      setBirthdate('');
      setWeight('');
      setHeight('');
      navigate('/Dashboard');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className='container text-center'>
        <img src={person} style={{ width: '20%' }} className='rounded' />
        <h2 className='mt-4'>{userData && userData.username}</h2>

        <div className={`mt-5 ${styles.profileForm}`}>
          <h2>Please add more your info</h2>
          <form className='mt-4' onSubmit={handleAddMoreInfo}>
            <input
              type='date'
              id='birthdate'
              placeholder='Birth date'
              style={{ margin: '4px' }}
              value={birthdate}
              onChange={(event) => setBirthdate(event.target.value)}
            />
            <br />
            <br />
            <input
              type='number'
              placeholder='WEIGHT (kg)'
              style={{ margin: '4px' }}
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
            <br />
            <br />
            <input
              type='number'
              placeholder='HEIGHT (cm)'
              style={{ margin: '4px' }}
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
            <br />
            {error && <p style={{ color: 'red' }}>{error}</p>} <br />
            <button onClick={handleAddMoreInfo}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
