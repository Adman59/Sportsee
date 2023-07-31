import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/layout/Header/Header';
import Sidebar from '@/layout/Sidebar/Sidebar';
import './layout.css';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <div className='layout-flex'>
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
    
}

export default Layout