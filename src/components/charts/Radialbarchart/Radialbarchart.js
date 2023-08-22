import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import './radialbarchart.css'

const Radialbarchart = () => {

    const data = [
        {
            name: '18-24',
            uv: 12,
            pv: 2400,
            fill: '#FF0101',
        },
      ];

    return (
        <div className="dashboard__radialbarchart">
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    startAngle={0}
                    endAngle={360}
                    innerRadius="80%"
                    barSize={12}
                    data={data}>
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    tick={false} />
                <RadialBar
                    background
                    dataKey="value"
                    fill="#ff0000"
                    cornerRadius={20}
                />
                <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="uv"
                />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Radialbarchart;