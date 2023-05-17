import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './Card.css';
export let acId = '';
import { userData } from "./api/Session";
import { updateUserData } from "./api/Session";


const Activities = () => {
  const navigate = useNavigate(); // getting the navigate function from react-router-dom
  const [userActivity, setUserActivity] = useState([]);

  //get data from local database
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userActivity'));
    if (storedData) {
      setUserActivity(storedData);
    }
  }, []);

  // function to handle clicking on the edit button for a user activity
  const handleEditButton = (id) => {
    // get the user activity to be edited based on its id
    const editActivity = userActivity.filter(
      (userActivity) => userActivity.id === id
    )[0];
    // set the global variable acId to the id of the user activity to be edited
    acId = editActivity.id;
    // navigate to the edit page
    navigate('/Edit');
  };

  // function to handle clicking on the delete button for a user activity
  const handleDeleteButton = (id) => {
    // create a new array of user activities without the one to be deleted
    const deleteActivity = userActivity.filter(
      (userActivity) => userActivity.id !== id
    );
    // get the stored user activity data from localStorage
    const storedData = JSON.parse(localStorage.getItem('userActivity'));
    // find the index of the user activity to be deleted
    const index = storedData.findIndex(
      (activityEdit) => activityEdit.id === acId
    );

    // delete the user activity to be deleted and add the rest of the user activities
    storedData.splice(index, 1, ...deleteActivity);
    // update the stored data in localStorage
    localStorage.setItem('userActivity', JSON.stringify(storedData));
    // update the userActivity state with the new array of user activities
    setUserActivity(deleteActivity);
    // show an alert to indicate that the user activity has been successfully deleted
    alert('Delete successful!');
  };

  return (
    

      <div className='container-fluid d-flex flex-column align-items-center'>

        {userActivity.map((user) => (
          <div className='activity-card mb-3' key={user.id}>
            <div className='card-header'>
              <h2 className='name'>{userData.username}</h2>
              <span>
                <button id='edit' onClick={() => handleEditButton(user.id)}>
                  <img
                    src='https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/edit-259.png'
                    width='40px'
                    heigth='40px'
                    border='0'
                  />{' '}
                </button>
                <button id='delete' onClick={() => handleDeleteButton(user.id)}>
                  <img
                    src='https://www.svgrepo.com/show/244044/delete.svg'
                    width='40px'
                    heigth='40px'
                    border='0'
                  />{' '}
                </button>
              </span>
            </div>

            <div className='activity-card-detail'>
              <p className='activity-name'>{user.activityName}</p>
              <hr />
              <br />
              <label className='description'>{user.description}</label>

              <div className='activity-tab'>
                <div className='activity-left-tab'>
                  {/* <img className='activity-image' src={item.image} /> */}
                  <p className='activity-type'>{user.activityType}</p>
                </div>
                <div className='activity-right-tab'>
                  <div className='detail'>
                    <p>Start:</p>
                    <span>{user.startDateTime}</span>
                    <br />
                    <p>Finished:</p>
                    <span>{user.finishDateTime}</span>
                  </div>
                  <div className='detail'>
                    <p>Duration:</p>
                    <span>{user.durationTime}</span>
                    {/* </div> */}
                    {/* <div className='detail'> */}
                    <p>Distance:</p>
                    <span>{user.distance}</span>
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
