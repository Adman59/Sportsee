import React from 'react';
import IconYoga from '@/assets/images/icon-yoga.png'
import IconSwim from '@/assets/images/icon-swim.png'
import IconBike from '@/assets/images/icon-bike.png'
import IconMuscle from '@/assets/images/icon-muscle.png'
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__icons'>
                <img src={IconYoga} alt="Logo" />
                <img src={IconSwim} alt="Logo" />
                <img src={IconBike} alt="Logo" />
                <img src={IconMuscle} alt="Logo" />
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    );
};

export default Sidebar;