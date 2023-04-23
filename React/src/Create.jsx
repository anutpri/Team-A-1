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
    const activityTypeList = [
        {id:1,type:'Running'},
        {id:2,type:'Walking'},
        {id:3,type:'Bike cycling'},
        {id:4,type:'weight training'},
        {id:5,type:'dancing'},
        ];


    const handleAddUserActivity = () => {
    
        if (!activityName.trim()) {
            setError('Activity name is required');
            return;
          }
          if (!description.trim()) {
            setError('Description is required');
            return;
          }
          if (new Date(startDateTime)< new Date()) {
            setError('Start date-time must be after current date-time');
            return;
          }
          if (!startDateTime || !finishDateTime) {
            setError('Start and Finish date-time are required');
            return;
          }
          if (new Date(startDateTime) >= new Date(finishDateTime)) {
            setError('Finish date-time must be after start date-time');
            return;
          }
          if (!activityType) {
            setError('Activity type is required');
            return;
          }
          if (!durationTime || durationTime < 10) {
            setError('Duration time is required and should be at least 10 minutes');
            return;
          }
          if (!distance || distance < 0.1) {
            setError('Distance is required and should be at least 0.1 kilometer');
            return;
          }

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
        setError('');
        acName.value = '';
        descript.value = '';
        start.value = '';
        finish.value = '';
        acType.value = '';  
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
            
            <select id="acType" onChange={(event) => setActivityType(event.target.value)}>
            <option value="">-- Select --</option>
            {activityTypeList.map((activity) => (<option key={activity.id} value={activity.type}>{activity.type}</option>))}
            </select><br></br><br></br>
            
            <label>Duration Time</label> <br></br>
            <input id="setDu" placeholder="Minutes" min="10" step="10" type="number" onChange={(event) =>setDurationTime(event.target.value)} /><br></br><br></br>
            <label>Distance</label> <br></br>
            <input id="setDis" placeholder="kilometer" min="0.1" step="0.1" type="number" onChange={(event) =>setDistance(event.target.value)} /><br></br><br></br>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
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