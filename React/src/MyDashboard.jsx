feature-card
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

import React from "react";
import Activities from "./Card";
import Profile from "./Profile";
import Layout from "./Layout";
import { userData } from "./api/Session";
import MyProfile from "./MyProfile";

export default function MyDashboard(){
    
    return(
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        <MyProfile/>
                        
                    </div>
                    <div className="col-sm-7">
                        <Activities/>
                    </div>
                </div>
            </div>
        </Layout>
    );
develop-new
}
