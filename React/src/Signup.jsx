import Layout from "./Layout"
// import { Context } from "./UserContext"
// import { useContext } from "react"
import React, { useState } from 'react'

const Signup = () => {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();
    const [organization, setOrganization] = useState();
    // const { signup } = useContext(Context)
  

    return (
        <Layout>
            <div>
            <label>Username</label> <br></br>
            <input type="text" placeholder="Type Username here" style={{margin: '4px'}} onChange={(event) =>setUsername(event.target.value)} /><br></br><br></br>
            <label>Password</label> <br></br>
            <input type="password" placeholder="Type Password here" style={{margin: '4px'}} onChange={(event) =>setPassword(event.target.value)} /><br></br><br></br>
            <label>Fullname</label> <br></br>
            <input type="text" placeholder="Type fullname here" style={{margin: '4px'}} onChange={(event) =>setFullname(event.target.value)} /><br></br><br></br>
            <label>Organization</label> <br></br>
            <input type="text" placeholder="Type organization here" style={{margin: '4px'}} onChange={(event) =>setOrganization(event.target.value)} /><br></br><br></br>
            <button onClick={() => signup({ username: username, password: password, fullname: fullname, organization: organization})}>Save</button>
            </div>
        </Layout>
    )
}

export default Signup