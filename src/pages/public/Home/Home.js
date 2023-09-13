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
  const [useMockData, setUseMockData] = useState(false); // Nouvel état pour gérer les données simulées
  const [showComponents, setShowComponents] = useState(true); // Nouvel état pour gérer la visibilité des composants enfants

  const fetchData = async (userId) => {
    try {
      let userDataResult, userPerformanceDataResult, userActivityDataResult, userSessionsDataResult;

      if (useMockData) {
        userDataResult = await getUserDataFromMock(userId);
        userPerformanceDataResult = await getUserPerformanceDataFromMock(userId);
        userActivityDataResult = await getUserActivityDataFromMock(userId);
        userSessionsDataResult = await getUserSessionsDataFromMock(userId);
      } else {
        userDataResult = await getUserDataFromApi(userId);
        userPerformanceDataResult = await getUserPerformanceDataFromApi(userId);
        userActivityDataResult = await getUserActivityDataFromApi(userId);
        userSessionsDataResult = await getUserSessionsDataFromApi(userId);
      }

      if (userDataResult && userPerformanceDataResult && userPerformanceDataResult && userSessionsDataResult) {
        setUserData(userDataResult);
        setUserPerformanceData(userPerformanceDataResult);
        setUserActivityData(userActivityDataResult);
        setUserSessionsData(userSessionsDataResult);
        setShowComponents(true); // Afficher les composants enfants si les données sont disponibles
      } else {
        // Afficher le message d'erreur si les données ne sont pas disponibles
        setUserData([]);
        setUserPerformanceData([]);
        setUserActivityData([]);
        setUserSessionsData([]);
        setShowComponents(false); // Masquer les composants enfants en cas d'échec
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      setShowComponents(false); // Masquer les composants enfants en cas d'erreur
    }
  };

  useEffect(() => {
    fetchData(activeUserId);
  }, [activeUserId, useMockData]);

  const toggleUser = () => {
    setActiveUserId(activeUserId === '12' ? '18' : '12');
  };

  const toggleMockData = () => {
    setUseMockData(!useMockData);
  };

  return (
    <div className="dashboard">
      {!showComponents ? (
        // Afficher le message d'erreur si les composants enfants ne sont pas visibles
        <div className="dashboard__error">
          <h2>Le site n'a pas pu faire appel au serveur.</h2>
          <p>Voulez-vous consulter le site grâce aux données simulées ?</p>
          <button className="dashboard__error__switch__data" onClick={toggleMockData}>Utiliser les données simulées</button>
        </div>
      ) : (
        // Afficher les composants enfants si visibles
        <>
          <Intro infoUser={userData} toggleUser={toggleUser} />
          <Nutriments infoNutriments={userData} />
          <Barchart infoActivity={userActivityData} />
          <Linechart infoSessions={userSessionsData} />
          <Radarchart infoPerf={userPerformanceData} />
          <Radialbarchart infoScore={userData} />
          <button className="dashboard__switch__data" onClick={toggleMockData}>
            {useMockData ? 'Utiliser les données réelles' : 'Utiliser les données simulées'}
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
