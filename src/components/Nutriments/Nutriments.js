import React from 'react';
import IconCalories from '@/assets/images/calories-icon.png'
import IconProtein from '@/assets/images/protein-icon.png'
import IconCarbs from '@/assets/images/carbs-icon.png'
import IconFat from '@/assets/images/fat-icon.png'
import './nutriments.css'

const Nutriments = () => {
    return (
        <div className='dashboard__nutriments'>
            <div className='nutriments'>
                <img src={IconCalories} alt="Logo" />
                <div className='nutriments__content'>
                    <h2>Data Number</h2>
                    <p>Calories</p>
                </div>
            </div>

            <div className='nutriments'>
                <img src={IconProtein} alt="Logo" />
                <div className='nutriments__content'>
                    <h2>Data Number</h2>
                    <p>Protéines</p>
                </div>
            </div>

            <div className='nutriments'>
                <img src={IconCarbs} alt="Logo" />
                <div className='nutriments__content'>
                    <h2>Data Number</h2>
                    <p>Glucides</p>
                </div>
            </div>

            <div className='nutriments'>
                <img src={IconFat} alt="Logo" />
                <div className='nutriments__content'>
                    <h2>Data Number</h2>
                    <p>Lipides</p>
                </div>
            </div>
        </div>
    );
};

export default Nutriments;