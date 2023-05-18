import React from 'react';
import Activities from './Card';
import Profile from './Profile';
import Layout from './Layout';
import { userData } from './api/Session';

export default function MyDashboard() {
  return (
    <Layout>
      <div className='d-flex justify-content-center container-fluid'>
        <div className='col'>
          <div className='col-md'>
            <Profile />
          </div>
          <br />
          <div className='col-md'>
            <Activities />
          </div>
        </div>
      </div>
    </Layout>
  );
}
