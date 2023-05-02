import { useState, useEffect } from 'react'
import Layout from './Layout'
import Activities from './Activities-Temp';

const Dashboard = () => {

  //Mock database on localhost
  const [userActivity, setUserActivity] = useState([]);

  //Get data in local database
  useEffect(() => {
    const storedActivity = JSON.parse(localStorage.getItem('userActivity')) || [];
    setUserActivity(storedActivity);
  }, []);

    return (
        <Layout>
            <div>
            <Activities />
            
            </div>
        </Layout>
    )
}

export default Dashboard