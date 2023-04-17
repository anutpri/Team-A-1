import Layout from "./Layout"
// import { useContext } from "react"
// import { Context } from "./UserContext"
import React, { useState } from 'react'

const Login = () => {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // const { login } = useContext(Context)

    
  
    return (
        <Layout>
        
            <div>
            <label>Email</label> <br></br>
            <input type="text" placeholder="Type Email here" style={{margin: '4px'}} onChange={(event) =>setEmail(event.target.value)} /><br></br><br></br>
            <label>Password</label> <br></br>
            <input type="password" placeholder="Type Password here" style={{margin: '4px'}} onChange={(event) =>setPassword(event.target.value)} /><br></br><br></br>
            <button onClick={() => login({ username: email, password: password})}>Login</button>
            </div>
            
        </Layout>
    )
}

export default Login