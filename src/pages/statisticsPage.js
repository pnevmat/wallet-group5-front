import React from 'react';

import UserMenu from '../components/UserMenu/UserMenu';
import Navigation from '../components/Navigation/Navigation';
import DiagramTab from '../components/diagramTab/diagramTab';

const StatisticsPage = () => {
    return (
        <>
            <UserMenu />
            <Navigation />
            <DiagramTab />
        </>
    );
};

export default StatisticsPage;