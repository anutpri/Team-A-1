import axios from "axios";

// const PORT = import.meta.env.DATABASE_PORT;
 const HOSTNAME = import.meta.env.VITE_DATABASE_IP;
 const SERVER = `${HOSTNAME}`;

// const SERVER = "https://fitbookserver.onrender.com";

export const getUser = async () => {
  
  try {
    const response = await axios.get(`${SERVER}/users`);
    const body = response.data;
    return body;
  } catch (error) {
    throw new Error('Error retrieving user data. Please try again later.');
  }
};

export const checkUserName = async (username) => {
  try {
    const response = await axios.get(`${SERVER}/users/username/${username}`);
    const body = response.data;
    return body;
  } catch (error) {
    throw new Error('Error retrieving user data. Please try again later.');
  }
};

export const checkEmail = async (email) => {
  try {
    const response = await axios.get(`${SERVER}/users/email/${email}`);
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

export const updateUser = async (_id,body) => {
  
  try {
    const response = await axios.patch(`${SERVER}/users/${_id}`, body);
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Error updating user:', error);
    } else {
      throw new Error('Error updating user. Please try again later.');
    }
  }
};

export const getActivity = async () => {
  
  try {
    const response = await axios.get(`${SERVER}/activities`);
    const body = response.data;
    return body;
  } catch (error) {
    throw new Error('Error retrieving activities data. Please try again later.');
  }
};

export const getActivityByUser = async (username) => {
  try {
    const response = await axios.get(`${SERVER}/activities/username/${username}`);
    const body = response.data;
    return body;
  } catch (error) {
    throw new Error('Error retrieving activities data. Please try again later.');
  }
};

export const createActivity = async (body) => {
  
  try {
    const response = await axios.post(`${SERVER}/activities`, body);
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Error creating activity:', error);
    } else {
      throw new Error('Error creating activity. Please try again later.');
    }
  }
};

export const updateActivity = async (_id,body) => {
  
  try {
    const response = await axios.patch(`${SERVER}/activities/${_id}`, body);
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Error updating activity:', error);
    } else {
      throw new Error('Error updating activity. Please try again later.');
    }
  }
};

export const deleteActivity = async (_id) => {
  
  try {
    const response = await axios.delete(`${SERVER}/activities/${_id}`);
    
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Error deleting activity:', error);
    } else {
      throw new Error('Error deleting activity. Please try again later.');
    }
  }
};