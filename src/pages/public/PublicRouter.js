import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from '@/layout/Layout.js'
import { Home, Not404 } from '@/pages/public/index.js'

const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home userId="18"/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="*" element={<Not404/>}></Route> 
            </Route>
        </Routes>

    );
};
// export du sous routage pour le router principal
export default PublicRouter;