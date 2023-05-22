import { React, useState } from 'react';
import Activities from './Card';
import Layout from './Layout';
import { userData, clearSessionData } from './api/Session';
import MyProfile from './MyProfile';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

//Add MyProfile to use instead of Profile
export default function MyDashboard() {
  const navigate = useNavigate();

  const createActivityBtn = () => {
    navigate('/Create');
  };

  const updateProfileBtn = () => {
    navigate('/Profile');
  };

  const changePasswordBtn = () => {
    navigate('/ChangePass');
  };

  const logoutBtn = () => {
    clearSessionData();
    navigate('/');
    location.reload();
  };

  return (
    <Layout>
      <div className='myProfile'>
        {/* <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-5'> */}
        <MyProfile />
        {/* </div>
          </div>
        </div> */}
      </div>

      <div className='settingBtn'>
        <button id='btnCreate' type='button' onClick={createActivityBtn}>
          Create Activity Card
        </button>
        <button id='btnProfile' type='button' onClick={updateProfileBtn}>
          Update Profile
        </button>
        <button id='btnChangePass' type='button' onClick={changePasswordBtn}>
          Change Password
        </button>
        <button id='logoutBtn' type='button' onClick={logoutBtn}>
          Log Out
        </button>
      </div>

      <div className='activityCard'>
        <p className='cardsText'>Your Activities</p>
        <Activities para={userData}/>
      </div>
    </Layout>
  );
}
