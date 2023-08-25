import React, { useState, useEffect } from 'react';
import Intro from '@/components/Intro/Intro';
import Nutriments from '@/components/Nutriments/Nutriments';
import Barchart from '@/components/charts/Barchart/Barchart';
import Linechart from '@/components/charts/Linechart/Linechart';
import Radarchart from '@/components/charts/Radarchart/Radarchart';
import Radialbarchart from '@/components/charts/Radialbarchart/Radialbarchart';
import { getUserDataFromApi, getUserPerformanceDataFromApi, getUserActivityDataFromApi, getUserSessionsDataFromApi } from '@/_services/axiosAPI.js';
import { getUserDataFromMock, getUserActivityDataFromMock, getUserSessionsDataFromMock, getUserPerformanceDataFromMock } from '@/_services/mockAPI.js';
import './home.css';

const Home = ({ userId }) => {
  const [userData, setUserData] = useState([]);
  const [userPerformanceData, setUserPerformanceData] = useState([]);
  const [userActivityData, setUserActivityData] = useState([]);
  const [userSessionsData, setUserSessionsData] = useState([]);
  const [activeUserId, setActiveUserId] = useState(userId);

  const toggleUser = () => {
    setActiveUserId(activeUserId === "12" ? "18" : "12");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDataFromApi(activeUserId);
        setUserData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        // Utiliser les données de mock en cas d'échec
        const data = await getUserDataFromMock(activeUserId);
        setUserData(data);
      }
    };
    fetchData();
  }, [activeUserId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserPerformanceDataFromApi(activeUserId);
        setUserPerformanceData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des performances utilisateur :', error);
        // Utiliser les données de mock en cas d'échec
        const data = await getUserPerformanceDataFromMock(activeUserId);
        setUserPerformanceData(data);
      }
    };
    fetchData();
  }, [activeUserId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserActivityDataFromApi(activeUserId);
        setUserActivityData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des activités utilisateur :', error);
        // Utiliser les données de mock en cas d'échec
        const data = await getUserActivityDataFromMock(activeUserId);
        setUserActivityData(data);
      }
    };
    fetchData();
  }, [activeUserId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserSessionsDataFromApi(activeUserId);
        setUserSessionsData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des sessions utilisateur :', error);
        // Utiliser les données de mock en cas d'échec
        const data = await getUserSessionsDataFromMock(activeUserId);
        setUserSessionsData(data);
      }
    };
    fetchData();
  }, [activeUserId]);

  return (
    <div className='dashboard'>
      <Intro infoUser={userData} toggleUser={toggleUser}/>
      <Nutriments infoNutriments={userData} />
      <Barchart infoActivity={userActivityData} />
      <Linechart infoSessions={userSessionsData}/>
      <Radarchart infoPerfMap={userPerformanceData.kind} infoPerf={userPerformanceData.data} />
      <Radialbarchart infoScore={userData} />
    </div>
  );
};

export default Home;