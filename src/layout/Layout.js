import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Sidebar from '@/layout/Sidebar/Sidebar';
import './layout.css';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </div>
    )
    
}

export default Layout