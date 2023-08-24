import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import './radialbarchart.css'

const Radialbarchart = ({ infoScore }) => {

    const score = infoScore.score !== undefined ? infoScore.score : infoScore.todayScore;

    const data = [
        {
            name: 'Score',
            uv: score * 100, // C'est le pourcentage de ma barre rouge (ici 30% car on reprend le score de l'id 18 de 0.3)
            fill: '#FF0101',
        },
      ];

    return (
        <div className="dashboard__radialbarchart">
            <h2 className="title__chart">Score</h2>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="55%"
                    cy="55%"
                    startAngle={90}
                    endAngle={450}
                    innerRadius="60%"
                    barSize={12}
                    data={data}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false} />
                <RadialBar
                    dataKey="uv"
                    fill="#fff"
                    cornerRadius={20}
                />
                <text x="50%" y="50%" textAnchor="middle" fontSize={16}>
                    <tspan  x="55%" dy="0em" textAnchor="middle" fontSize="26px" fontWeight="bold">
                    {`${score * 100}%`}
                    </tspan>
                    <tspan x="55%" dy="1.5em" textAnchor="middle" fontSize="16px" fill="#74798C" fontWeight={500}>
                    de votre
                    </tspan>
                    <tspan x="55%" dy="1.5em" textAnchor="middle" fontSize="16px" fill="#74798C" fontWeight={500}>
                    objectif
                    </tspan>
                </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Radialbarchart;