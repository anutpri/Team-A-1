import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import { userData, updateActivityData } from './api/Session';
import { getActivityByUser, deleteActivity } from './api/Node';

const Activities = () => {
  const navigate = useNavigate(); // getting the navigate function from react-router-dom
  const [userActivity, setUserActivity] = useState([]);

  console.log(userData);

  useEffect(() => {
    const username = userData ? userData.username : '';
    const getUserActivity = async () => {
      const users = await getActivityByUser(username);
      setUserActivity(users);
    };
    getUserActivity();
  }, [userData]);

  console.log(userActivity);

  // function to handle clicking on the edit button for a user activity
  const handleEditButton = async (activity) => {
    try {
      updateActivityData(activity);
    } catch (error) {
      setError(error.message);
    }
    // navigate to the edit page
    navigate('/Edit');
  };

  // function to handle clicking on the delete button for a user activity
  const handleDeleteButton = async (_id) => {
    deleteActivity(_id);
    alert('Delete successful!');
    location.reload();
  };

  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      {userActivity.map((activity) => (
        <div className='activity-card mb-3' key={activity._id}>
          <div className='card-header'>
            <h2 className='name'>
              {activity.username}: {activity.activityName}
            </h2>
            <span>
              <button
                id='delete'
                onClick={() => handleDeleteButton(activity._id)}
              >
                <img
                  src='https://www.svgrepo.com/show/244044/delete.svg'
                  width='30px'
                  heigth='30px'
                  border='0'
                />{' '}
              </button>
              <button id='edit' onClick={() => handleEditButton(activity)}>
                <img
                  src='https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/edit-259.png'
                  width='30px'
                  heigth='30px'
                  border='0'
                />{' '}
              </button>
            </span>
          </div>

          <div className='activity-card-detail'>
            {/* <p className='activity-name'>{user.activityName}</p> */}
            <label className='description'>{activity.description}</label>
            <hr />
            {/* <br /> */}
            {/* <label className='description'>{user.description}</label> */}

            <div className='activity-tab'>
              <div className='activity-left-tab'>
                {/* <img className='activity-image' src={item.image} /> */}
                <p className='activity-type'>{activity.activityType}</p>
              </div>
              <div className='activity-right-tab'>
                <div className='detail1'>
                  <span>
                    <strong>Start:</strong>
                  </span>
                  <span>
                    {' '}
                    {activity.startDateTime
                      ? activity.startDateTime.slice(0, 16)
                      : ''}
                  </span>
                  <br />
                  <span>
                    <strong>Finished:</strong>
                  </span>
                  <span>
                    {' '}
                    {activity.finishDateTime
                      ? activity.finishDateTime.slice(0, 16)
                      : ''}
                  </span>
                </div>
                <div className='detail2'>
                  <span>
                    <strong>Duration:</strong>
                  </span>
                  <span> {activity.durationTime} min(s)</span>
                  {/* </div> */}
                  {/* <div className='detail'> */}
                  <br />
                  <span>
                    <strong>Distance:</strong>
                  </span>
                  <span> {activity.distance} km</span>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
