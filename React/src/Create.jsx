import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import './Create.css'
import fitbook from './assets/FITBOOK.png';


const Create = () => {
    const navigate = useNavigate(); // getting the navigate function from react-router-dom
    const [userActivity, setUserActivity] = useState([]);
    const [activityName, setActivityName] = useState('');
    const [description, setDescription] = useState('');
    const [startDateTime, setStartDateTime] = useState('');
    const [finishDateTime, setFinishDateTime] = useState('');
    const [activityType, setActivityType] = useState('');
    const [durationTime, setDurationTime] = useState('');
    const [distance, setDistance] = useState('');
    const [error, setError] = useState(null); //correct an error message
    
    //mockup data for activities list
    const activityTypeList = [
        {id:1,type:'Running'},
        {id:2,type:'Walking'},
        {id:3,type:'Bike cycling'},
        {id:4,type:'Weight training'},
        {id:5,type:'Dancing'},
        ];

        //get data from local database
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userActivity'));
        if (storedData) {
          setUserActivity(storedData);
        }
      }, []);

      //set data to local database
      useEffect(() => {
        localStorage.setItem('userActivity', JSON.stringify(userActivity));
      }, [userActivity]);

      

    const handleAddUserActivity = () => {
    
        // check if activityName is empty
        if (!activityName.trim()) {
            setError('Activity name is required');
            return;
        }

        // check if description is empty
        if (!description.trim()) {
            setError('Description is required');
            return;
        }

        // check if startDateTime is before current date-time
        if (new Date(startDateTime)< new Date()) {
            setError('Start date-time must be after current date-time');
            return;
        }

        // check if startDateTime or finishDateTime is empty
        if (!startDateTime || !finishDateTime) {
            setError('Start and Finish date-time are required');
            return;
        }

        // check if finishDateTime is before startDateTime
        if (new Date(startDateTime) >= new Date(finishDateTime)) {
            setError('Finish date-time must be after start date-time');
            return;
        }

        // check if activityType is empty
        if (!activityType) {
            setError('Activity type is required');
            return;
        }

        // check if durationTime is empty or less than 10
        if (!durationTime || durationTime < 10) {
            setError('Duration time is required and should be at least 10 minutes');
            return;
          }
    // create a new user activity object
    const newUserActivity = {
          id: Date.now(),
          activityName,
          description,
          startDateTime,
          finishDateTime,
          activityType,
          durationTime,
          distance
        };

        // add the new user activity object to the userActivity state array
        setUserActivity([...userActivity, newUserActivity]);
        // save the updated userActivity state array to localStorage
        localStorage.setItem('userActivity', JSON.stringify([...userActivity, newUserActivity]));
        // clear the input form fields
        clearDataForm();
        // show a success message
        alert('Save successful!');
        // navigate to the Dashboard page
        navigate('/Dashboard');     
      };

    // define a function to handle the cancel button click event
    const handleCancel= () => {
        clearDataForm();
        navigate('/Dashboard'); 
      };

    const clearDataForm= () => {
      // Set all state values to empty strings
        setActivityName('');
        setDescription('');
        setStartDateTime('');
        setFinishDateTime('');
        setActivityType('');
        setDurationTime('');
        setDistance('');
        setError('');

        // Reset the input fields to empty strings
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
          {/* The header section */}
          <a href={'/'}>
            {/* Link to the homepage */}
            <img src={fitbook} alt="fitbook" />
            {/* Logo image */}
          </a>
        </header>
            <h2 id='header1'>CREATE A NEW CARD</h2>
            <div className='inputData'>
            
            <label>Activity Name</label> <br></br>
            {/* setActivityName when input onChange */}
            <input id="acName" type="text" onChange={(event) =>setActivityName(event.target.value)} /><br></br><br></br>

            <label>Description</label> <br></br>
            {/* setDescription when input onChange */}
            <input id="descript" type="text" onChange={(event) =>setDescription(event.target.value)} /><br></br><br></br>

            
            <label id='startL'>Start-DateTime</label> <label id='finishL'>Finish-DateTime</label><br></br>
            {/* setStartDateTime when input onChange */}
            <input id="start" type="datetime-local" placeholder="YYYY-MM-DD:HH:MM:SS" onChange={(event) =>setStartDateTime(event.target.value)} />
           {/* setFinishDateTime when input onChange */}
            <input id="finish" type="datetime-local" placeholder="YYYY-MM-DD:HH:MM:SS" onChange={(event) =>setFinishDateTime(event.target.value)} /><br></br><br></br><br></br>
            
            <label id='acTypeL'>Activity Type</label> <label id='setDuL'>Duration Time</label> <label id="setDisL">Distance       </label>
            {/* setActivityType when input onChange */}
            <select id="acType" onChange={(event) => setActivityType(event.target.value)}>
            <option value="">-- Select --</option>
            {/* Map data from activityTypeList to dropdown input */}
            {activityTypeList.map((activity) => (<option key={activity.id} value={activity.type}>{activity.type}</option>))}
            </select>
            
            {/* setDurationTime when input onChange */}
            <input id="setDu" placeholder="Minutes" min="10" step="10" type="number" onChange={(event) =>setDurationTime(event.target.value)} />
            {/* setDistance when input onChange */}
            <input id="setDis" placeholder="kilometer" min="0.0" step="0.1" type="number" onChange={(event) =>setDistance(event.target.value)} /><br></br><br></br>
            
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
            <button id="save" onClick={handleAddUserActivity}>Save</button> {/* Call handleAddUserActivity when click */}
            <button id="cancel" onClick={handleCancel}>Cancel</button> {/* Call handleCancel when click */}
            
            </div>
        </div>
    )
}

export default Create