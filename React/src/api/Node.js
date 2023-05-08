import axios from "axios";

const PORT = 3001;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;


export const getCompanies = async () => {
  // code down below
  const response = await axios.get(`${SERVER}/company`);
  const body = response.data;
  return body;
};

export const createCompanies = async (body) => {
  // code down below
  const response = await axios.post(`${SERVER}/company`, body);
  alert(response.data);
};
