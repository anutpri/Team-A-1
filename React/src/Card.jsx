import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
export let acId = '';
import { userData, updateActivityData } from "./api/Session";
import { getActivityByUser } from "./api/Node";

const Activities = () => {
  const navigate = useNavigate(); // getting the navigate function from react-router-dom
  const [userActivity, setUserActivity] = useState([]);
  const username = userData.username;
  // //get data from local database
  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem('userActivity'));
  //   if (storedData) {
  //     setUserActivity(storedData);
  //   }
  // }, []);

  useEffect(() => {

    const getUserActivity = async () => {
      const users = await getActivityByUser(username);
      setUserActivity(users);
      
    };
    getUserActivity();
    
  }, [username]);

  // console.log(userActivity);

  // function to handle clicking on the edit button for a user activity
  const handleEditButton = async (activity) => {

   
   
    // get the user activity to be edited based on its id
    // const editActivity = userActivity.filter(
    //   (userActivity) => userActivity._id === _id
    // )[0];

    // set the global variable acId to the id of the user activity to be edited
    // acId = _id;
    try {
      updateActivityData(activity);
      
    } catch (error) {
      setError(error.message);
    }
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
      {userActivity.map((activity) => (
      <div className='activity-card mb-3' key={activity._id}>
          <div className='card-header'>
            <h2 className='name'>{activity.username}</h2>
            <span>
              <button id='edit' onClick={() => handleEditButton(activity)}>
                <img
                  src='https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/edit-259.png'
                  width='40px'
                  heigth='40px'
                  border='0'
                />{' '}
              </button>
              <button id='delete' onClick={() => handleDeleteButton(activity._id)}>
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
                <div className='detail'>
                  <p>Start:</p>
                  <span>{activity.startDateTime}</span>
                  <br />
                  <p>Finished:</p>
                  <span>{activity.finishDateTime}</span>
                </div>
                <div className='detail'>
                  <p>Duration:</p>
                  <span>{activity.durationTime}</span>
                  {/* </div> */}
                  {/* <div className='detail'> */}
                  <p>Distance:</p>
                  <span>{activity.distance}</span>
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
