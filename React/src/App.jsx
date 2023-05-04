import { useState, useEffect } from 'react';
import './App.css';
import Layout from './Layout';
import Create from './Create';
import Card from './Card';

// import Edit from './Edit';

function App() {
  //Mock database on localhost
  const [userActivity, setUserActivity] = useState([]);

  //Get data in local database
  useEffect(() => {
    const storedActivity =
      JSON.parse(localStorage.getItem('userActivity')) || [];
    setUserActivity(storedActivity);
  }, []);

  return (
    <Layout>
      <div>This is main page</div>
    </Layout>
  );
}

export default App;
