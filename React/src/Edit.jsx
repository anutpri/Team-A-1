import Layout from './Layout'
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import './Edit.css'
import fitbook from './assets/FITBOOK.png';
import Create from './Create';

const Edit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;
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
        {id:4,type:'Weight training'},
        {id:5,type:'Dancing'},
        ];

        // useEffect(() => {
        // const activityToEdit = editActivity;
        //   if (activityToEdit) {
        //     setUserActivity(activityToEdit);
        //     setActivityName(activityToEdit.activityName);
        //     setDescription(activityToEdit.description);
        //     setStartDateTime(activityToEdit.startDateTime);
        //     setFinishDateTime(activityToEdit.finishDateTime);
        //     setActivityType(activityToEdit.activityType);
        //     setDurationTime(activityToEdit.durationTime);
        //     setDistance(activityToEdit.distance);
        //   } else {
        //     setError(editActivity);
        //   }
        //   }, [editActivity]);

    useEffect(() => {
      
      alert('Go'+ id);
        const storedData = JSON.parse(localStorage.getItem('userActivity'));
        if (storedData) {
          const activityToEdit = storedData.find(activityEdit => activityEdit.id === id);
          if (activityToEdit) {
            setUserActivity(activityToEdit);
            setActivityName(activityToEdit.activityName);
            setDescription(activityToEdit.description);
            setStartDateTime(activityToEdit.startDateTime);
            setFinishDateTime(activityToEdit.finishDateTime);
            setActivityType(activityToEdit.activityType);
            setDurationTime(activityToEdit.durationTime);
            setDistance(activityToEdit.distance);
          } else {
            setError("Activity not found1");
          }
        } else {
          setError("Activity not found2");
        }
      }, []);

      // useEffect(() => {
      //   localStorage.setItem('userActivity', JSON.stringify(userActivity));
      // }, [userActivity]);

    const handleEditUserActivity = () => {
    
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
          // if (!distance || distance < 0.1) {
          //   setError('Distance is required and should be at least 0.1 kilometer');
          //   return;
          // }

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
        alert('Save successful!');
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
        <div className='Create'>
        <header>
          <a href={'/'}>
            <img src={fitbook} alt="fitbook"/>
          </a>
        </header>
            <h2 id='header1'>EDIT AN ACTIVITY CARD</h2>
            <div className='inputData'>
            
            <label>Activity Name</label> <br></br>
            <input id="acName" type="text" value={activityName} onChange={(event) =>setActivityName(event.target.value)} /><br></br><br></br>
            <label>Description</label> <br></br>
            <input id="descript" type="text" onChange={(event) =>setDescription(event.target.value)} /><br></br><br></br>
            <label id='startL'>Start-DateTime</label> <label id='finishL'>Finish-DateTime</label><br></br>
            <input id="start" type="datetime-local" placeholder="YYYY-MM-DD:HH:MM:SS" onChange={(event) =>setStartDateTime(event.target.value)} />
            <input id="finish" type="datetime-local" placeholder="YYYY-MM-DD:HH:MM:SS" onChange={(event) =>setFinishDateTime(event.target.value)} /><br></br><br></br><br></br>
            
            <label id='acTypeL'>Activity Type</label> <label id='setDuL'>Duration Time</label> <label id="setDisL">Distance       </label>
            <select id="acType" onChange={(event) => setActivityType(event.target.value)}>
            <option value="">-- Select --</option>
            {activityTypeList.map((activity) => (<option key={activity.id} value={activity.type}>{activity.type}</option>))}
            </select>
            <input id="setDu" placeholder="Minutes" min="10" step="10" type="number" onChange={(event) =>setDurationTime(event.target.value)} />
            <input id="setDis" placeholder="kilometer" min="0.0" step="0.1" type="number" onChange={(event) =>setDistance(event.target.value)} /><br></br><br></br>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
            <button id="save" onClick={handleEditUserActivity}>Save</button>
            <button id="cancel" onClick={handleCancel}>Cancel</button>
            
            </div>

            <br></br> <br></br>
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
    )
}


export default Edit