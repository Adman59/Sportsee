import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  } from '@/mock/mockdata.js';

  
export const getUserDataFromMock = (userId) => {
    let test = [];
    USER_MAIN_DATA.map((user) => {
        if (user.id == userId) {
           test = user;
        }
    })
    return test;
};
  
export const getUserActivityDataFromMock = (userId) => {
    const userActivityData = USER_ACTIVITY.find((user) => user.userId == userId);
    return userActivityData;
    
};
  
export const getUserSessionsDataFromMock = (userId) => {
    const userAverageSession = USER_AVERAGE_SESSIONS.find((user) => user.userId == userId);
    return userAverageSession;
};
  
export const getUserPerformanceDataFromMock = (userId) => {
    const userPerformance = USER_PERFORMANCE.find((user) => user.userId == userId);
    console.log(userPerformance);
    return userPerformance;
};