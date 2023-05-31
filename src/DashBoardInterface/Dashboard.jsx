import React from 'react';
import DrowerNavigate from './DrowerLayout/DrowerNavigate';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Bistro | DashBoard</title>
            </Helmet>
            <DrowerNavigate />

        </>
    );
};

export default Dashboard;