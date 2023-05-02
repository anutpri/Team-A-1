import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export let acId = '';


const Activities = () => {
    const navigate = useNavigate();
    const [userActivity, setUserActivity] = useState([]);
    
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userActivity'));
        if (storedData) {
          setUserActivity(storedData);
        }
      }, []);

    const handleEditButton = id => {
  
        const editActivity = userActivity.filter(userActivity => userActivity.id === id)[0];
        acId = editActivity.id;
        navigate("/Edit");
      
        };

    const handleDeleteButton = id => {

        const deleteActivity = userActivity.filter(userActivity => userActivity.id !== id);
        const storedData = JSON.parse(localStorage.getItem('userActivity'));
        const index = storedData.findIndex(activityEdit => activityEdit.id === acId);

            storedData.splice(index, 1, ...deleteActivity); // delete deleteActivity 
            localStorage.setItem('userActivity', JSON.stringify(storedData));
            setUserActivity(deleteActivity);
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
                <td>{user.id}</td>
                <td>{user.activityName}</td>
                <td>{user.description}</td>
                <td>{user.startDateTime}</td>
                <td>{user.finishDateTime}</td>
                <td>{user.activityType}</td>
                <td>{user.durationTime}</td>
                <td>{user.distance}</td>
                <td><button id='Edit' onClick={() => handleEditButton(user.id)}>Edit</button></td>
                <td><button id='delete' onClick={() => handleDeleteButton(user.id)}>Delete</button></td>
                </tr>
                ))}
                </tbody>
            </table>
            </div>
        )

}

export default Activities