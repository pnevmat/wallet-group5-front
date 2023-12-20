import React from 'react';
import {useSelector} from 'react-redux';

import UserMenu from '../components/UserMenu/UserMenu';
import StatisticsPageContainer from '../components/StatisticsPageContainer/StatisticsPageContainer';

import authSelectors from '../redux/selectors/authorisationSelectors';
import statisticsSelectors from '../redux/selectors/statisticsSelector';

const StatisticsPage = () => {
    const {balance} = useSelector(statisticsSelectors.getStatisticsTransactions);
    
    const userName = useSelector(authSelectors.getUserName);
    
    return (
        <>
            <UserMenu userName={userName} />
            <StatisticsPageContainer
                balance={balance}
            />
        </>
    );
};

export default StatisticsPage;