import React from 'react';
import DrowerNavigate from './DrowerLayout/DrowerNavigate';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <>
            <DrowerNavigate />
        </>
    );
};

export default Dashboard;