import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './radarchart.css'

const Radarchart = ({ infoPerf }) => {
    if (!infoPerf) {
        // Les données ne sont pas encore disponibles, retourner un état de chargement ou autre chose
        return <div>Erreur lors du chargement des données physiques utilisateurs...</div>;
    }

    const data = infoPerf;


    return (
        <div className="dashboard__radarchart">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    data={data.performance}
                    cx="50%" cy="50%" outerRadius="60%"
                >
                    <PolarGrid
                        gridType='polygon'
                        radialLines={false}
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fill: "white", fontSize: 11, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar
                        dataKey="value"
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