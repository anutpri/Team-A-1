import Layout from "./Layout"
// import { useContext } from "react"
// import { Context } from "./UserContext"
import React, { useState } from 'react'

const Login = () => {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const { login } = useContext(Context)

    
  
    return (
        <Layout>
            <div>
            <label>Username</label> <br></br>
            <input type="text" placeholder="Type Username here" style={{margin: '4px'}} onChange={(event) =>setUsername(event.target.value)} /><br></br><br></br>
            <label>Password</label> <br></br>
            <input type="password" placeholder="Type Password here" style={{margin: '4px'}} onChange={(event) =>setPassword(event.target.value)} /><br></br><br></br>
            <button onClick={() => login({ username: username, password: password})}>Login</button>
            </div>
            
        </Layout>
    )
}

export default Login