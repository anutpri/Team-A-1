export let userData = JSON.parse(sessionStorage.getItem('userData')) || {};
export let activityData = JSON.parse(sessionStorage.getItem('activityData')) || {};

export const updateUserData = (data) => {
  userData = data;
  sessionStorage.setItem('userData', JSON.stringify(userData));
};

export const updateActivityData = (data) => {
  activityData = data;
  sessionStorage.setItem('activityData', JSON.stringify(activityData));
};

export const clearSessionData = () => {
  sessionStorage.removeItem('userData');
  sessionStorage.removeItem('activityData');
};