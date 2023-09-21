import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './barchart.css';

const Barchart = ({ infoActivity }) => {

    if (!infoActivity) {
        // Les données ne sont pas encore disponibles
        return <div>Erreur lors du chargement des données des activités...</div>;
    }


    // Accès aux propriétés calculées (minCalories, maxCalories, minKilogram et maxKilogram)
    const minCalories = infoActivity.minCalories;
    const maxCalories = infoActivity.maxCalories;
    const minKilogram = infoActivity.minKilogram;
    const maxKilogram = infoActivity.maxKilogram;

    const data = infoActivity.sessions;

    return (
        <div className="dashboard__barchart">
            <div className="dashboard__barchart__intro">
                <h2>Activité quotidienne</h2>
                <ul className="dashboard__barchart__legend">
                    <li style={{ color: '#282D30' }}>
                        <span>Poids (kg)</span>
                    </li>
                    <li style={{ color: '#E60000' }}>
                        <span>Calories brûlées (kCal)</span>
                    </li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height="70%">
                <BarChart
                    data={data}
                >
                    <CartesianGrid
                        horizontal={true}
                        strokeDasharray="2"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="day"
                        tickFormatter="day"
                        axisLine={{ stroke: "#DEDEDE", strokeWidth: 2 }}
                        tick={{ fill: "#9B9EAC" }}
                        tickLine={false}
                        tickMargin={16}
                    />
                    <YAxis
                        yAxisId="kilogram"
                        orientation="right"
                        tick={{ fill: "#9B9EAC" }}
                        tickMargin={30}
                        tickLine={false}
                        axisLine={false}
                        tickCount={3}
                        domain={[minKilogram - 1, maxKilogram]}
                    />
                    <YAxis
                        yAxisId="calories"
                        orientation="left"
                        hide={true}
                        domain={[minCalories - 100, maxCalories]}
                    />
                    <Tooltip
                        wrapperStyle={{
                            width: "50px",
                            height: "80px",
                            backgroundColor: "red",
                            fontSize: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        content={({ payload }) => {
                            if (payload && payload.length > 0) {
                                const { calories, kilogram } = payload[0].payload;
                                return (
                                    <div>
                                        <p style={{ color: "#FFFFFF" }}>{`${calories} Kcal`}</p>
                                        <p style={{ color: "#FFFFFF" }}>{`${kilogram} kg`}</p>
                                    </div>
                                );
                            }
                            return null;
                        }}
                    />
                    <Bar
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        barSize={10}
                        radius={[20, 20, 0, 0]}
                        fill="#282D30"
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        barSize={10}
                        radius={[20, 20, 0, 0]}
                        fill="#E60000"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Barchart;
