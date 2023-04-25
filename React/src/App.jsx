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
      <p>Show data for test only</p>
            <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>activityName</th>
                <th>description</th>
                <th>startDateTime</th>
                <th>finishDateTime</th>
                <th>activityType</th>
                <th>durationTime</th>
                <th>distance</th>
            </tr>
            </thead>
            <tbody>
                {userActivity.map(user => (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.activityName}</td>
                <td>{user.description}</td>
                <td>{user.startDateTime}</td>
                <td>{user.finishDateTime}</td>
                <td>{user.activityType}</td>
                <td>{user.durationTime}</td>
                <td>{user.distance}</td>
                
                </tr>
                ))}
                </tbody>
            </table>
    </div>
    </Layout>
  )
}

export default App
