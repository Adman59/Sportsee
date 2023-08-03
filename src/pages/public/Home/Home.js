import React, { useState, useEffect } from 'react';
import Intro from '@/components/Intro/Intro';
import Nutriments from '@/components/Nutriments/Nutriments';
import { getUserDataFromApi } from '@/_services/axiosAPI.js';

const Home = ({ userId }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserDataFromApi(userId);
        setUserData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, [userId]);

  console.log('Données utilisateur :', userData);

  return (
    <div className='dashboard'>
      <Intro info={userData} />
      <Nutriments />
    </div>
  );
};

export default Home;