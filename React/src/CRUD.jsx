import { useState, useEffect } from "react";
import { getUser, createUser } from "./api/Node";

function Crud() {
  const [users, setusers] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [load, toggleReload] = useState(false);

  useEffect(() => {
    const getuser = async () => {
      const users = await getUser();
      setusers(users);
      
    };

    getuser();
  }, [load]);

  const save = async () => {
    const newuser = {
      name,
      email,
      username,
      password,
    };
    await createUser(newuser);
    console.log(newuser);
    toggleReload(!load);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={save}>Save</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              
              <tr key={user.userId}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Crud;
