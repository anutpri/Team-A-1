export let userData = JSON.parse(sessionStorage.getItem('userData')) || null;
export let activityData = JSON.parse(sessionStorage.getItem('activityData')) || null;

export const updateUserData = (data) => {
  userData = data;
  sessionStorage.setItem('userData', JSON.stringify(userData));
};

export const updateActivityData = (data) => {
  activityData = data;
  sessionStorage.setItem('activityData', JSON.stringify(activityData));
};