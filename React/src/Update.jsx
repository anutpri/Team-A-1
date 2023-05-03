import Layout from './Layout'
import React, { useState } from 'react'

const Update = () => {
    const [activityName, setActivityName] = useState();
    const [description, setDescription] = useState();
    const [startDateTime, setStartDateTime] = useState();
    const [finishDateTime, setFinishDateTime] = useState();
    const [activityType, setActivityType] = useState();
    const [durationTime, setDurationTime] = useState();
    const [distance, setDistance] = useState();

    return (
        <Layout>
            <div>
            <label>Activity Name</label> <br></br>
            <input type="text" placeholder="Type Activity Name here" style={{margin: '4px'}} onChange={(event) =>setActivityName(event.target.value)} /><br></br><br></br>
            <label>Description</label> <br></br>
            <input type="text" placeholder="Type Description here" style={{margin: '4px'}} onChange={(event) =>setDescription(event.target.value)} /><br></br><br></br>
            <label>Start-DateTime</label> <br></br>
            <input type="text" placeholder="Type Start-DateTime here" style={{margin: '4px'}} onChange={(event) =>setStartDateTime(event.target.value)} /><br></br><br></br>
            <label>Finish-DateTime</label> <br></br>
            <input type="text" placeholder="Type Finish-DateTime here" style={{margin: '4px'}} onChange={(event) =>setFinishDateTime(event.target.value)} /><br></br><br></br>
            <label>Activity Type</label> <br></br>
            <input type="text" placeholder="Type Activity Type here" style={{margin: '4px'}} onChange={(event) =>setActivityType(event.target.value)} /><br></br><br></br>
            <label>DurationTime</label> <br></br>
            <input type="text" placeholder="Type DurationTime here" style={{margin: '4px'}} onChange={(event) =>setDurationTime(event.target.value)} /><br></br><br></br>
            <label>Distance</label> <br></br>
            <input type="text" placeholder="Type Distance here" style={{margin: '4px'}} onChange={(event) =>setDistance(event.target.value)} /><br></br><br></br>

            <button onClick={() => Update({})}>Update</button>
            <button onClick={() => Cancel({})}>Cancel</button>
            </div>
        </Layout>
    )
}

export default Update