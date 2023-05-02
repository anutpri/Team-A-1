import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export let acId = '';


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
    const handleEditButton = id => {
  
        // get the user activity to be edited based on its id
        const editActivity = userActivity.filter(userActivity => userActivity.id === id)[0];
        // set the global variable acId to the id of the user activity to be edited
        acId = editActivity.id;
        // navigate to the edit page
        navigate("/Edit");
      
        };

    // function to handle clicking on the delete button for a user activity
    const handleDeleteButton = id => {

        // create a new array of user activities without the one to be deleted
        const deleteActivity = userActivity.filter(userActivity => userActivity.id !== id);
        // get the stored user activity data from localStorage
        const storedData = JSON.parse(localStorage.getItem('userActivity'));
        // find the index of the user activity to be deleted
        const index = storedData.findIndex(activityEdit => activityEdit.id === acId);

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
                {userActivity.map(user => (
                <tr key={user.id}>
                <td>{user.id}</td> {/* display activity id */}
                <td>{user.activityName}</td> {/* display activity name*/}
                <td>{user.description}</td> {/* display activity description */}
                <td>{user.startDateTime}</td> {/* display activity start date and time */}
                <td>{user.finishDateTime}</td> {/* display activity finish date and time */}
                <td>{user.activityType}</td> {/* display activity type */}
                <td>{user.durationTime}</td> {/* display activity duration time */}
                <td>{user.distance}</td> {/* display activity distance */}

                {/* Call handleEditButton when click */}
                <td><button id='Edit' onClick={() => handleEditButton(user.id)}>Edit</button></td>
                {/* Call handleDeleteButton when click */}
                <td><button id='delete' onClick={() => handleDeleteButton(user.id)}>Delete</button></td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>
        )

}

export default Activities