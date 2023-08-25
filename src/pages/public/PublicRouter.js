import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from '@/layout/Layout.js'
import { Home, Not404 } from '@/pages/public/index.js'

const PublicRouter = () => {

    const [activeUserId, setActiveUserId] = useState("12"); // ID de l'utilisateur actif

    const toggleUser = () => {
        // Basculer entre les ID d'utilisateurs
        setActiveUserId(activeUserId === "12" ? "18" : "12");
    };
    
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home userId={activeUserId} toggleUser={toggleUser} />} />
                <Route path="/home" element={<Home userId={activeUserId} toggleUser={toggleUser} />} />
                <Route path="*" element={<Not404 />} />
            </Route>
        </Routes>

    );
};
// export du sous routage pour le router principal
export default PublicRouter;