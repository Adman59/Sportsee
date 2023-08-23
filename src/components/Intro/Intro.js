import React from 'react';
import './intro.css';

const Intro = ({ info }) => {
    if (!info || !info.userInfos || !info.userInfos.firstName) {
        // Les données ne sont pas encore disponibles, retourner un état de chargement ou autre chose
        return <div>Loading...</div>;
    }

    return (
        <div className='dashboard__intro'>
           <h1>Bonjour <span>{info.userInfos.firstName}</span></h1>
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Intro;