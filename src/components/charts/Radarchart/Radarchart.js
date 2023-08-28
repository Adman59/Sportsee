import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './radarchart.css'

const Radarchart = ({ infoPerfMap, infoPerf }) => {

    if (!infoPerfMap || !infoPerf ) {
        // Les données ne sont pas encore disponibles, retourner un état de chargement ou autre chose
        return <div>Erreur lors du chargement des données physiques utilisateurs...</div>;
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const transformedData = Array.isArray(infoPerf) ? infoPerf.map(item => ({
        subject: capitalizeFirstLetter(infoPerfMap[item.kind]), 
        key: item.kind,
        fullMark: item.value
    })) : [];

    return (
        <div className="dashboard__radarchart">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={transformedData}
                cx="50%" cy="50%" outerRadius="60%"
            >
                <PolarGrid 
                    gridType='polygon'
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="subject"
                    tick={{ fill: "white", fontSize: 12, fontWeight: 500 }} 
                />
                <PolarRadiusAxis tick={false} axisLine={false} />  
                <Radar
                    dataKey="fullMark"
                    stroke="#FF0000"
                    fill="#FF0000"
                    fillOpacity={0.6}
                />
            </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Radarchart;