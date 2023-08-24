import React from 'react';
import './intro.css';

const Intro = ({ infoUser }) => {
    if (!infoUser || !infoUser.userInfos || !infoUser.userInfos.firstName) {
        // Les données ne sont pas encore disponibles, retourner un état de chargement ou autre chose
        return <div>Erreur lors du chargement des données utilisateurs...</div>;
    }

    return (
        <div className='dashboard__intro'>
           <h1>Bonjour <span>{infoUser.userInfos.firstName}</span></h1>
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Intro;