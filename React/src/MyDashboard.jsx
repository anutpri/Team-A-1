import { React, useState } from 'react';
import Activities from './Card';
import Profile from './Profile';
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
