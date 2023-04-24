import Layout from "./Layout";
import React, { useState } from "react";
import { useEffect } from "react";

const Cards = (props) => {
  const [userActivity, setUserActivity] = useState([]);
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [finishDateTime, setFinishDateTime] = useState("");
  const [activityType, setActivityType] = useState("");
  const [durationTime, setDurationTime] = useState("");
  const [distance, setDistance] = useState("");
  const [error, setError] = useState(null);

  // const createCards = () => {

  return (
    <Layout>
      <table>
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
        <tbody>
          {userActivity.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.activityName}</td>
              <td>{user.description}</td>
              <td>{user.startDateTime}</td>
              <td>{user.finishDateTime}</td>
              <td>{user.activityType}</td>
              <td>{user.durationTime}</td>
              <td>{user.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Cards;
