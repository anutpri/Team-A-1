export let userData = JSON.parse(sessionStorage.getItem('userData')) || null;

export const updateUserData = (data) => {
  userData = data;
  sessionStorage.setItem('userData', JSON.stringify(userData));
};