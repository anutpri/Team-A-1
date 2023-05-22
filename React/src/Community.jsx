import { React, useState } from 'react';
import Activities from './Card';
import Layout from './Layout';
import { userData, clearSessionData } from './api/Session';
import { useNavigate } from 'react-router-dom';

export default function Community() {
  const navigate = useNavigate();

  
  

  return (
    <Layout>
       <div className='activityCard'>
         <p className='cardsText'>Activity Card(s)</p>
         <Activities />
       </div>
    </Layout>
  );
}

  