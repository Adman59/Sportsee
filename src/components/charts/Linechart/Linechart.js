import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import './linechart.css'


const Linechart = ({ infoSessions }) => {

  const data = infoSessions.sessions;

  const formatDayOfWeek = (day) => {
    const daysOfWeek = ["L", "M", "M", "J", "V", "S", "D"];
    return daysOfWeek[day - 1];
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={`linechart-tooltip ${active ? "active" : ""}`}>
          <p className="desc">{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = ({ points, width }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.1}
        x={points[1].x}
        width={width}
        height={288}
      />
    );
  };
  

    return (
        <div className="dashboard__linechart">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 90, right: 0, left: 0, bottom: 48 }}
                >
                <CartesianGrid
                    strokeDasharray=""
                    vertical={false}
                    horizontal={false}
                />
                <XAxis
                  dataKey="day"
                  tickFormatter={formatDayOfWeek}
                  axisLine={false}
                  tickLine={false}
                  tickMargin={42}
                  tick={{ fill: '#FFFFFF', opacity: '0.5', fontSize: '12' }}
                  padding={{ left: 16, right: 16 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  type="number"
                  hide="true" 
                />
                <Tooltip //infobulle
                  content={<CustomTooltip />}
                  position={{ y: 64 }}
                  cursor={<CustomCursor />}
                />
                <Line
                  type="natural"
                  dataKey="sessionLength"
                  stroke="#FFFFFF"
                  strokeWidth={2}
                  dot={false}
                />
                <text
                  x={32}
                  y={32}
                  fontSize={15}
                  textAnchor="start"
                  fill="rgba(255, 255, 255, 0.5)"
                >
                  <tspan x={24} dy="0">
                    Durée moyenne
                  </tspan>
                  <tspan x={24} dy="1.5em">
                    des sessions
                  </tspan>
                </text>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Linechart;