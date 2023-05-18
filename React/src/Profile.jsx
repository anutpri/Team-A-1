import Layout from "./Layout";
import person from "./assets/person.png";
import { userData } from "./api/Session";
import { updateUserData } from "./api/Session";
import styles from "./Profile.module.css";
import { useState } from "react";

export default function Profile() {
  const [date, setDate] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const handleAddMoreInfo = (event)=>{
    event.preventDefault();
    alert(`Add More Info: BirthDate->${date}, Weight->${weight}, Height->${height}`);
    setDate('');
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
              value={date}
              onChange={(event) => setDate(event.target.value)}
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
