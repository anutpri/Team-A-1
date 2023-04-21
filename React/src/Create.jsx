import Layout from './Layout'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();
    const [userActivity, setUserActivity] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [description, setDescription] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [finishDateTime, setFinishDateTime] = useState('');
    const [activityType, setActivityType] = useState('');
    const [durationTime, setDurationTime] = useState('');
    const [distance, setDistance] = useState('');
    const [error, setError] = useState(null);
    const activityTypeList = ['Running','Walking','Bike cycling','weight training','dancing'];


    const handleAddUserActivity = () => {
    
        const newUserActivity = {
          id: userActivity.length + 1,
          activityName,
          description,
          startDateTime,
          finishDateTime,
          activityType,
          durationTime,
          distance
        };
        setUserActivity([...userActivity, newUserActivity]);
        clearDataForm()
      };

    const handleCancel= () => {
        clearDataForm()
        
      };

    const clearDataForm= () => {
        setActivityName('');
        setDescription('');
        setStartDateTime('');
        setFinishDateTime('');
        setActivityType('');
        setDurationTime('');
        setDistance('');
        acName.value = '';
        descript.value = '';
        start.value = '';
        finish.value = '';  
        setAc.value = '';
        setDu.value = '';
        setDis.value = '';
        };

    return (
        <Layout>
            <div>
            <label>Activity Name</label> <br></br>
            <input id="acName" type="text" onChange={(event) =>setActivityName(event.target.value)} /><br></br><br></br>
            <label>Description</label> <br></br>
            <input id="descript" type="text" onChange={(event) =>setDescription(event.target.value)} /><br></br><br></br>
            <label>Start-DateTime</label> <br></br>
            <input id="start" type="datetime-local" placeholder="YYYY-MM-DD:HH:MM:SS" onChange={(event) =>setStartDateTime(event.target.value)} /><br></br><br></br>
            <label>Finish-DateTime</label> <br></br>
            <input id="finish" type="datetime-local" placeholder="YYYY-MM-DD:HH:MM:SS" onChange={(event) =>setFinishDateTime(event.target.value)} /><br></br><br></br>
            <label>Activity Type</label> <br></br>
            <input id="setAc" type="text" placeholder="Select" onChange={(event) =>setActivityType(event.target.value)} /><br></br><br></br>
            <label>Duration Time</label> <br></br>
            <input id="setDu" placeholder="Minutes" min="10" step="10" type="number" onChange={(event) =>setDurationTime(event.target.value)} /><br></br><br></br>
            <label>Distance</label> <br></br>
            <input id="setDis" placeholder="kilometer" min="0.1" step="0.1" type="number" onChange={(event) =>setDistance(event.target.value)} /><br></br><br></br>

            <button id="save" onClick={handleAddUserActivity}>Save</button>
            <button id="cancel" onClick={handleCancel}>Cancel</button>
            </div>

            <br></br>
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
        </Layout>
    )
}

export default Create