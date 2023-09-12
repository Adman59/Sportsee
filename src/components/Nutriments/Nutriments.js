import React from 'react';
import IconCalories from '@/assets/images/calories-icon.png';
import IconProtein from '@/assets/images/protein-icon.png';
import IconCarbs from '@/assets/images/carbs-icon.png';
import IconFat from '@/assets/images/fat-icon.png';
import './nutriments.css';

const Nutriments = ({ infoNutriments }) => {
    if (!infoNutriments || !infoNutriments.keyData) {
        // Les données ne sont pas encore disponibles, retourner un état de chargement ou autre chose
        return <div>Erreur lors des chargements des données des nutriments...</div>;
    }


    return (
        <div className='dashboard__nutriments'>
            <div className='nutriments'>
                <img src={IconCalories} alt="Logo" />
                <div className='nutriments__content'>
                    <h2>{infoNutriments.keyData[0].value}</h2>
                    <p>{infoNutriments.keyData[0].name}</p>
                </div>
            </div>

            <div className='nutriments'>
                <img src={IconProtein} alt="Logo" />
                <div className='nutriments__content'>
                <h2>{infoNutriments.keyData[1].value}</h2>
                    <p>{infoNutriments.keyData[1].name}</p>
                </div>
            </div>

            <div className='nutriments'>
                <img src={IconCarbs} alt="Logo" />
                <div className='nutriments__content'>
                <h2>{infoNutriments.keyData[2].value}</h2>
                    <p>{infoNutriments.keyData[2].name}</p>
                </div>
            </div>

            <div className='nutriments'>
                <img src={IconFat} alt="Logo" />
                <div className='nutriments__content'>
                    <h2>{infoNutriments.keyData[3].value}</h2>
                    <p>{infoNutriments.keyData[3].name}</p>
                </div>
            </div>
        </div>
    );
};

export default Nutriments;