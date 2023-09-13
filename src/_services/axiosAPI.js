import axios from "axios";
import { BarChartModel } from "../models/BarChart_Model";
import { LineChartModel } from "../models/LineChart_Model";
import { RadarChartModel } from "../models/RadarChart_Model";
import { RadialChartModel } from "../models/RadialChart_Model";

export const getUserDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        const formattedData = new RadialChartModel(response.data.data); // Utilisez la classe RadialChartModel pour formater les données
        console.log(formattedData);
        return formattedData;
    } catch (error) {
        console.error(error);
    }
};

export const getUserActivityDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        const formattedData = new BarChartModel(response.data.data)
        return formattedData;
    } catch (error) {
        console.error(error);
    }
};

export const getUserSessionsDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
        const formattedData = new LineChartModel(response.data.data)
        return formattedData
    } catch (error) {
        console.error(error);
    }
};

export const getUserPerformanceDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        const formattedData = new RadarChartModel(response.data.data)
        return formattedData
    } catch (error) {
        console.error(error);
    }
};