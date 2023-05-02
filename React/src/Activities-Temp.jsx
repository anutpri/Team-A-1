export let acId = '';


const Activities = () => {

    
    
    
    const handleEditButton = id => {
  
        const editActivity = userActivity.filter(userActivity => userActivity.id === id)[0];
        acId = editActivity.id;
        navigate({pathname: '/Edit'});
      
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