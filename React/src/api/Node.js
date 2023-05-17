import axios from "axios";

const PORT = 8080;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;


export const getUser = async () => {
  // code down below
  const response = await axios.get(`${SERVER}/users`);
  const body = response.data;
  return body;
};

export const createUser = async (body) => {
  // code down below
  const response = await axios.post(`${SERVER}/users`, body);
  alert(response.data);
};
