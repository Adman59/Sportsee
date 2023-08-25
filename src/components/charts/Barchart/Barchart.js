import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './barchart.css'

const Barchart = ({ infoActivity }) => {

    console.log('Données utilisateur :', infoActivity);
    

    if (!infoActivity || !infoActivity.sessions) {
        // Les données ne sont pas encore disponibles
        return <div>Erreur lors des chargements des données des activités...</div>;
    }

    const data = infoActivity.sessions;

    const formatDate = (date) => {
        const formattedDate = new Date(date); //new pour créer un nouvel objet date
        const day = formattedDate.getDate(); //methode getDate pour récupérer le jour
        return day;
    };

    const maxKilogram = Math.ceil(
        Math.max(...data.map((sessions) => sessions.kilogram))
    );

    const minKilogram = Math.floor(
        Math.min(...data.map((sessions) => sessions.kilogram))
    );

    const maxCalories = Math.max(...data.map((sessions) => sessions.calories)); //Math.max pour trouver la valeur maximale

    const minCalories = Math.min(...data.map((sessions) => sessions.calories)); //Math.min pour trouver la valeur minimale

    console.log(maxCalories);
    console.log(minCalories);
    

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
                    tickFormatter={formatDate}
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