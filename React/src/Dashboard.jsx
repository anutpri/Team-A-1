import { useState, useEffect } from 'react';
import Layout from './Layout';

const Dashboard = () => {
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
      <div>
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
            {userActivity.map((user) => (
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
  );
};

export default Dashboard;
