import Layout from "./Layout";
import person from "./assets/person.png";
import { userData, updateUserData } from "./api/Session";
import styles from "./Profile.module.css";
import React, { useState, useEffect } from "react";
import { updateUser, checkEmail } from "./api/Node";
import { useNavigate } from "react-router-dom";

//Update Profile to has input for adding more info
export default function Profile() {
  
  const [birthdate, setBirthdate] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

    useEffect(() =>{
      const userToupdate = userData;

    if (userToupdate) {
      setBirthdate(userToupdate.birthdate);
      setWeight(userToupdate.weight);
      setHeight(userToupdate.height);
      updateUserData(userToupdate);
      console.log(userToupdate);
    } else {
      setError('Error User not found');
    }
        
    }, [userData]);

  const handleAddMoreInfo = async (event)=>{
    event.preventDefault();

    const _id = userData._id;
    const email = userData.email;
    const username = userData.username;
    const password = userData.password;

    const updatedUserData = { 
      
      email,
      username,
      password,
      birthdate,
      weight,
      height,
    } ;

    try {
      await updateUser(_id, updatedUserData);
      const user = await checkEmail(email);
      
      updateUserData(user);
      
    } catch (error) {
      setError(error.message);
    }


    alert(`Add More Info: BirthDate->${birthdate}, Weight->${weight}, Height->${height}`);
    setBirthdate('');
    setWeight('');
    setHeight('');
    navigate('/Dashboard');

  };

  return (
    <Layout>
      <div className="container text-center">
        <img src={person} style={{ width: "20%" }} className="rounded" />
        <h2 className="mt-4">{userData && userData.username}</h2>

        <div className={`mt-5 ${styles.profileForm}`}>
          <h2>Please add more your info</h2>
          <form className="mt-4" onSubmit={handleAddMoreInfo}>
            <input
              type="date"
              id="birthdate"
              placeholder="Birth date"
              style={{ margin: "4px" }}
              value={birthdate}
              onChange={(event) => setBirthdate(event.target.value)}
            />
            <br />
            <br />

            <input
              type="number"
              placeholder="Weight (kg)"
              style={{ margin: "4px" }}
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
            <br />
            <br />

            <input
              type="number"
              placeholder="Height (cm)"
              style={{ margin: "4px" }}
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}{" "}
            <br />
            <button onClick={handleAddMoreInfo}>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
