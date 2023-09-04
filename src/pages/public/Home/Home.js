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




// const getinfo = () => {
//   const data= await getUserDataFromApi(activeUserId)

//   if (!data){
//     //on affiche un message d'erreur 
  
//   } else {
//     const datamain = await getUserDataFromApi(activeUserId)
//     const datasession = await getUserDataFromApi(activeUserId)
//     const dataacitivy = await getUserDataFromApi(activeUserId)
//   }
// }



  const toggleUser = () => {
    setActiveUserId(activeUserId === "12" ? "18" : "12");
  };

  // useEffect Data **************************************

  useEffect(() => {
    const fetchData = async () => {
      let data = null;
      let apiError = null;
  
      // Tentative de récupération des données via l'API
      try {
        data = await getUserDataFromApi(activeUserId);
      } catch (error) {
        apiError = error;
      }
  
      // Si l'API a échoué ou s'il y a une erreur, essayer de récupérer les données mockées
      if (apiError || !data) {
        data = getUserDataFromMock(activeUserId);
      }
  
      setUserData(data);
    };
  
    fetchData();
  }, [activeUserId]);

  
  // useEffect Performances **************************************


  useEffect(() => {
    const fetchData = async () => {
      let data = null;
      let apiError = null;
  
      // Tentative de récupération des données de performances via l'API
      try {
        data = await getUserPerformanceDataFromApi(activeUserId);
      } catch (error) {
        apiError = error;
      }
  
      // Si l'API a échoué ou s'il y a une erreur, essayer de récupérer les données de performances mockées
      if (apiError || !data) {
        data = getUserPerformanceDataFromMock(activeUserId);
      }
  
      setUserPerformanceData(data);
    };
  
    fetchData();
  }, [activeUserId]);


  // useEffect Activity **************************************


  useEffect(() => {
    const fetchData = async () => {
      let data = null;
  
      // Tentative de récupération des données d'activités' via l'API
      try {
        data = await getUserActivityDataFromApi(activeUserId);
      } catch (apiError) {
        console.error('Erreur lors de la récupération des activités utilisateur via API :', apiError);
      }
  
      // Si l'API a échoué ou s'il y a une erreur, essayer de récupérer les données de activités mockées
      if (!data) {
        data = getUserActivityDataFromMock(activeUserId);
      }
  
      setUserActivityData(data);
    };
  
    fetchData();
  }, [activeUserId]);


  // useEffect Sessions **************************************


  useEffect(() => {
    const fetchData = async () => {
      let data = null;
      let apiError = null;
  
      // Tentative de récupération des données de sessions via l'API
      try {
        data = await getUserSessionsDataFromApi(activeUserId);
      } catch (error) {
        apiError = error;
      }
  
      // Si l'API a échoué ou s'il y a une erreur, essayer de récupérer les données des sessions mockées
      if (apiError || !data) {
        data = getUserSessionsDataFromMock(activeUserId);
      }
  
      setUserSessionsData(data);
    };
  
    fetchData();
  }, [activeUserId]);


  return (
    <div className='dashboard'>
      <Intro infoUser={userData} toggleUser={toggleUser}/>
      <Nutriments infoNutriments={userData} />
      <Barchart infoActivity={userActivityData} />
      <Linechart infoSessions={userSessionsData}/>
      {/* <Radarchart infoPerfMap={userPerformanceData.kind} infoPerf={userPerformanceData.data} /> */}
      <Radialbarchart infoScore={userData} />
    </div>
  );
};

export default Home;