import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './linechart.css'


const Linechart = ({ infoSessions }) => {

  const data = infoSessions.sessions;

    return (
        <div className="dashboard__linechart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                >
                <CartesianGrid
                    strokeDasharray=""
                    vertical={false}
                    horizontal={false}
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={0}
                  tick={{ fill: '#FFFFFF', opacity: '0.5' }}
                  padding={{ left: 16, right: 16 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  hide="true"
                />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="sessionLength"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  dot={false}
                />
                <text
                  x={50}
                  y={50}
                  fontSize={15}
                  textAnchor="start"
                  fill="rgba(255, 255, 255, 0.5)"
                >
                  <tspan x={40} dy="0">
                    Durée moyenne
                  </tspan>
                  <tspan x={40} dy="1.2em">
                    des sessions
                  </tspan>
                </text>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Linechart;