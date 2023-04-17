import Layout from "./Layout"
// import { Context } from "./UserContext"
// import { useContext } from "react"
import React, { useState } from 'react'

const Signup = () => {
    
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    // const { signup } = useContext(Context)
  

    return (
        <Layout>
            <div>
            <label>Fullname</label> <br></br>
            <input type="text" placeholder="Type fullname here" style={{margin: '4px'}} onChange={(event) =>setFullname(event.target.value)} /><br></br><br></br>
            <label>Email</label> <br></br>
            <input type="text" placeholder="Type Email here" style={{margin: '4px'}} onChange={(event) =>setEmail(event.target.value)} /><br></br><br></br>
            <label>Password</label> <br></br>
            <input type="password" placeholder="Type Password here" style={{margin: '4px'}} onChange={(event) =>setPassword(event.target.value)} /><br></br><br></br>
            
            <button onClick={() => signup({ username: email, password: password, fullname: fullname})}>Save</button>
            </div>
        </Layout>
    )
}

export default Signup