import { React, useState } from 'react';
import Activities from './Card';
import Layout from './Layout';
import { userData } from './api/Session';
import MyProfile from './MyProfile';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

//Add MyProfile to use instead of Profile
export default function MyDashboard() {
  const [name, setName] = useState();

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

  return (
    <Layout>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-5'>
            <MyProfile />
          </div>
          <div className='createActivity'>
            <span>
              <button id='btnCreate' type='button' onClick={createActivityBtn}>
                Create Activity
              </button>
              <button id='btnupProfile' type='button' onClick={updateProfileBtn}>
                Update Profile
              </button>
              <button id='btnchnagePass' type='button' onClick={changePasswordBtn}>
                Change Password
              </button>
            </span>
          </div>
          <div className='col-sm-7'>
            <Activities />
          </div>
        </div>
      </div>
    </Layout>
  );
}
