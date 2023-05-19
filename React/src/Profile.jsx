import Layout from "./Layout";
import person from "./assets/person.png";
import { userData, updateUserData } from "./api/Session";
import styles from "./Profile.module.css";
import React, { useState, useEffect } from "react";
import { updateUser } from "./api/Node";

//Update Profile to has input for adding more info
export default function Profile() {
  
  const [birthdate, setBirthdate] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  
    useEffect(() => {
      const userToupdate = updateUser;

    if (userToupdate) {
      setBirthdate(userToupdate.birthdate);
      setWeight(userToupdate.weight);
      setHeight(userToupdate.height);
      
    } else {
      setError('Error User not found');
    }
        
    }, [updateUser]);

  const handleAddMoreInfo = async (event)=>{
    event.preventDefault();

    const _id = updateUser._id;
    const email = updateUser.email;
    const username = updateUser.username;
    const password = updateUser.password;

    const updatedUser = { 
      
      email,
      username,
      password,
      birthdate,
      weight,
      height,
    } ;

    try {
      await updateUser(_id, updatedUser);
      
    } catch (error) {
      setError(error.message);
    }


    alert(`Add More Info: BirthDate->${birthdate}, Weight->${weight}, Height->${height}`);
    setBirthdate('');
    setWeight('');
    setHeight('');
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
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
