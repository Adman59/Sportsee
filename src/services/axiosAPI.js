import axios from "axios";

export const getUserDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const getUserActivityDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const getUserSessionsDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};

export const getUserPerformanceDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        return response.data.data;
    } catch (error) {
        console.error(error);
    }
};