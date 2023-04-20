import Layout from "./Layout"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
   
    // Array of user data for testing
    const userData = [
        { email: 'user1@gmail.com', password: 'password1' },
        { email: 'user2@gmail.com', password: 'password2' },
        { email: 'user3@gmail.com', password: 'password3' }
    ];

    const handleLogin = (event) => {
        event.preventDefault(); 
        // Check if email is valid
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setError('Please enter a valid email');
                return;
            }
            
            // Check if password meets minimum requirements
            if (password.length < 6) {
                setError('Password must be at least 6 characters long');
                return;
            }
            
            // Check if email and password match a user in the userData array
            const user = userData.find(user => user.email === email && user.password === password);
            if(user) {
                // If a user is found, the login is successful and redirected to App (main)
                alert('Login successful!');
                navigate("/");
            } else {
                // If a user is not found, display an error message 
                setError('Invalid email or password');
            }
    }
  
    return (
        <Layout>
            <div class="header">
                <div class="title">
                <p>Sign In to</p>
                <p>Change</p>
                <p>Your Life</p> <br />
                <p id='if'>If you don't have an account <br></br><span>you can</span> <a class="Regis" href={'/Signup'}>Register Here!</a></p>
                 </div>
            </div>

            <div class = "Login">  
            <input type="text" placeholder="Enter Email" style={{margin: '4px'}} onChange={(event) =>setEmail(event.target.value)} /><br></br><br></br>
            <input type="password" placeholder="Password" style={{margin: '4px'}} onChange={(event) =>setPassword(event.target.value)} /><br></br>
            <a class = "Forgot">Forgot Password?</a><br></br><br></br>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display the error message */}
            <button onClick={handleLogin}>Sign In</button>
            </div>
            
        </Layout>
    )
}

export default Login