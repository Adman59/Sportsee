import React from 'react';
import './intro.css';

const Intro = ({ infoUser, toggleUser }) => {

    if (!infoUser || !infoUser.firstName) {
        // Les données ne sont pas encore disponibles, retourner un état de chargement ou autre chose
        return <div>Erreur lors du chargement des données utilisateurs...</div>;
    }


    return (
        <div className='dashboard__intro'>
            <div className="dashboard__intro__greatings">
                <h1>Bonjour <span>{infoUser.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
           <button className="dashboard__intro__switch" onClick={toggleUser}>
                Changer d'utilisateur
           </button>
        </div>
    );
};

export default Intro;