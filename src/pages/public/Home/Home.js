import React, { useState, useEffect } from 'react';
import Intro from '@/components/Intro/Intro';
import Nutriments from '@/components/Nutriments/Nutriments';
import Barchart from '@/components/charts/Barchart/Barchart';
import Linechart from '@/components/charts/Linechart/Linechart';
import Radarchart from '@/components/charts/Radarchart/Radarchart';
import Radialbarchart from '@/components/charts/Radialbarchart/Radialbarchart';
import {
  getUserDataFromApi,
  getUserPerformanceDataFromApi,
  getUserActivityDataFromApi,
  getUserSessionsDataFromApi,
} from '@/_services/axiosAPI.js';
import {
  getUserDataFromMock,
  getUserActivityDataFromMock,
  getUserSessionsDataFromMock,
  getUserPerformanceDataFromMock,
} from '@/_services/mockAPI.js';
import './home.css';

const Home = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);
  const [userSessionsData, setUserSessionsData] = useState([]);
  const [activeUserId, setActiveUserId] = useState(userId);

  const fetchData = async (userId) => {
    try {
      const userDataApi = await getUserDataFromApi(userId);
      const userPerformanceDataApi = await getUserPerformanceDataFromApi(userId);
      const userActivityDataApi = await getUserActivityDataFromApi(userId);
      const userSessionsDataApi = await getUserSessionsDataFromApi(userId);

      console.log(userActivityDataApi);

      if (userDataApi) {
        setUserData(userDataApi);
      } else {
        setUserData(getUserDataFromMock(userId));
      }

      if (userPerformanceDataApi) {
        setUserPerformanceData(userPerformanceDataApi);
      } else {
        setUserPerformanceData(getUserPerformanceDataFromMock(userId));
      }

      if (userActivityDataApi) {
        setUserActivityData(userActivityDataApi);
      } else {
        setUserActivityData(getUserActivityDataFromMock(userId));
      }

      if (userSessionsDataApi) {
        setUserSessionsData(userSessionsDataApi);
      } else {
        setUserSessionsData(getUserSessionsDataFromMock(userId));
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    fetchData(activeUserId);
  }, [activeUserId]);

  const toggleUser = () => {
    setActiveUserId(activeUserId === '12' ? '18' : '12');
  };

  return (
    <div className="dashboard">
      <Intro infoUser={userData} toggleUser={toggleUser} />
      <Nutriments infoNutriments={userData} />
      <Barchart infoActivity={userActivityData} />
      <Linechart infoSessions={userSessionsData} />
      <Radarchart infoPerf={userPerformanceData} />
      <Radialbarchart infoScore={userData} /> 
    </div>
  );
};

export default Home;