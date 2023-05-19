import Layout from "./Layout";
import person from "./assets/person.png";
import { userData } from "./api/Session";
import { checkEmail } from "./api/Node";
import React, { useState, useEffect } from 'react';

//Add MyProfile for using inside MyDashboard
export default function MyProfile() {
    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const email = userData.email;
          const userNow = await checkEmail(email);
          const birthdateObj = userNow.birthdate;
          const userAge = birthdateObj ? new Date().getFullYear() - new Date(birthdateObj).getFullYear() : '';
          setAge(userAge);
          setWeight(userNow.weight);
          setHeight(userNow.height);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
    }, []);

    return (
        
            <div className="container text-center">
                <img src={person} style={{width:"20%"}} className="rounded"/>
                <h2 className="mt-4">{userData && userData.username}</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}{" "}
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>{weight} Kgs</h4>
                        <h4>WEIGHT</h4>
                    </div>
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>{height} cm</h4>
                        <h4>HEIGHT</h4>
                    </div>
                    <div className="p-3 text-white rounded" style={{background:"#6F67B4"}}>
                        <h4>{age} Years</h4>
                        <h4>AGE</h4>
                    </div>
                </div>

                {/* <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 3</h1>
                </div>
                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 2</h1>
                </div>
                <div className="mt-5 p-5 rounded" style={{color:"#6F67B4",height:"30vh",background:"#D9D9D9"}}>
                    <h1>Activity Card # 1</h1>
                </div> */}
            </div>
        
    );
}