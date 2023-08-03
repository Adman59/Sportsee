import React from 'react';
import './intro.css';

const Intro = ({ info }) => {
    return (
        <div className='dashboard__intro'>
           {/* <h1>Bonjour <span>{info.userInfos.firstName}</span></h1> */}
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default Intro;