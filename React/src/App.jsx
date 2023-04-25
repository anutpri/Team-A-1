import { useState, useEffect } from 'react'
import './App.css'
import Layout from './Layout'
import Create from './Create';
import Edit from './Edit';

function App() {
  
  //Mock database on localhost
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    const storedActivity = JSON.parse(localStorage.getItem('userActivity')) || [];
    setUserActivity(storedActivity);
  }, []);

  return (
    <Layout>
  
    <div>
      <h1>This is Main</h1>
    </div>
    </Layout>
  )
}

export default App
