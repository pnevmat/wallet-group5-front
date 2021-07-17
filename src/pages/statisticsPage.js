import React from 'react';
import {useSelector} from 'react-redux';

import UserMenu from '../components/UserMenu/UserMenu';
import StatisticsComponent from '../components/StatisticsComponent/StatisticsComponent';
import DiagramTab from '../components/diagramTab/diagramTab';

import authSelectors from '../redux/selectors/authorisationSelectors';
import statisticsSelectors from '../redux/selectors/statisticsSelector';

const StatisticsPage = () => {
    const {balance} = useSelector(statisticsSelectors.getStatisticsTransactions);
    
    const userName = useSelector(authSelectors.getUserName);
    
    return (
        <>
            <UserMenu userName={userName} />
            <StatisticsComponent balance={balance} />
            <DiagramTab  />
        </>
    );
};

export default StatisticsPage;