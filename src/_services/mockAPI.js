import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
  } from '@/mock/mockdata';

  
  export const getUserDataFromMock = (userId) => {
    const userMainData = USER_MAIN_DATA.find((user) => user.id === userId);
    return userMainData;
};
  
export const getUserActivityDataFromMock = (userId) => {
    const userActivityData = USER_ACTIVITY.find(
        (user) => user.userId === userId
    );
    return userActivityData;
};
  
export const getUserSessionsDataFromMock = (userId) => {
    const userAverageSession = USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === userId
    );
    return userAverageSession;
};
  
export const getUserPerformanceDataFromMock = (userId) => {
    const userPerformance = USER_PERFORMANCE.find(
        (user) => user.userId === userId
    );
    return userPerformance;
};