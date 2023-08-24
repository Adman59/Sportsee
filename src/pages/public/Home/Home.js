import React, { useState, useEffect } from 'react';
import Intro from '@/components/Intro/Intro';
import Nutriments from '@/components/Nutriments/Nutriments';
import Barchart from '@/components/charts/Barchart/Barchart';
import Linechart from '@/components/charts/Linechart/Linechart';
import Radarchart from '@/components/charts/Radarchart/Radarchart';
import Radialbarchart from '@/components/charts/Radialbarchart/Radialbarchart';
import { getUserDataFromApi, getUserPerformanceDataFromApi, getUserActivityDataFromApi } from '@/_services/axiosAPI.js';
import './home.css'

// Pourquoi ne pas faire les appels a l'API directement dans le composant enfant ? Par exemple performances n'est nécessaire uniquement dans Radarchart

const Home = ({ userId }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDataFromApi(userId);
        setUserData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      }
    };

    fetchData();
  }, [userId]);

  // console.log('Données utilisateur :', userData);

  const [userPerformanceData, setUserPerformanceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getUserPerformanceDataFromApi(userId);
            setUserPerformanceData(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des performances utilisateur :', error);
        }
        };

        fetchData();
    }, [userId]);

    // console.log('Données utilisateur :', userPerformanceData);

  const [userActivityData, setUserActivityData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await getUserActivityDataFromApi(userId);
            setUserActivityData(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des activités utilisateur :', error);
        }
        };

        fetchData();
    }, [userId]);

    // console.log('Données utilisateur :', userActivityData);

  return (
    <div className='dashboard'>
      <Intro infoUser={userData} />
      <Nutriments infoNutriments={userData} />
      <Barchart infoActivity={userActivityData} />
      <Linechart />
      <Radarchart infoPerfMap={userPerformanceData.kind} infoPerf={userPerformanceData.data} />
      <Radialbarchart infoScore={userData} />
    </div>
  );
};

export default Home;