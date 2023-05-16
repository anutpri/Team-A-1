import axios from "axios";

const PORT = 8080;
const HOSTNAME = "http://127.0.0.1";
const SERVER = `${HOSTNAME}:${PORT}`;


export const getUser = async () => {
  try {
    const response = await axios.get(`${SERVER}/users`);
    const body = response.data;
    return body;
  } catch (error) {
    throw new Error('Error retrieving user data. Please try again later.');
  }
};

export const createUser = async (body) => {
  
  try {
    const response = await axios.post(`${SERVER}/users`, body);
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Username already exists');
    } else {
      throw new Error('Error creating user. Please try again later.');
    }
  }
};
