import axios from "axios";
import {BarChartModel} from "@/models/BarChart_Model";
import {RadialChartModel} from "@/models/RadialChart_Model";
import { LineChartModel } from "@/models/LineChart_Model";
import { RadarChartModel } from "@/models/RadarChart_Model";

export const getUserDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}`);

        if(response.ok){
            const data = await response.json();
            if(data){
                return new RadialChartModel(data.data);
            }
        }else{
            throw new Error('true');
        }

    } catch (error) {
        return false
    }
};

export const getUserActivityDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
        if(response.ok){
            const data = await response.json();
            if(data){
                return new BarChartModel(data.data)
            }
        }else{
            throw new Error('true');
        }
    } catch (error) {
        return false
    }
};

export const getUserSessionsDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);

        if(response.ok) {
            const data = await response.json();
            if (data) {
                return new LineChartModel(data.data)
            }
        } else {
            throw new Error("true");
        }
    } catch (error) {
        return false
    }
};

export const getUserPerformanceDataFromApi = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
        
        if(response.ok) {
            const data = await response.json();
            if(data) {
                return new RadarChartModel(data.data)
            }
        } else {
            throw new Error("true");
        }
    } catch (error) {
        return false
    }
};