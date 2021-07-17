import React from 'react';
import {useSelector} from 'react-redux';

import UserMenu from '../components/UserMenu/UserMenu';
import Navigation from '../components/Navigation/Navigation';
import Balance from '../components/balance/balance';
import ExchangeBox from '../components/ExchangeBox/ExchangeBox';
import DiagramTab from '../components/diagramTab/diagramTab';

import authSelectors from '../redux/selectors/authorisationSelectors';
import statisticsSelectors from '../redux/selectors/statisticsSelector';

const StatisticsPage = () => {
    const {balance} = useSelector(statisticsSelectors.getStatisticsTransactions);
    
    const userName = useSelector(authSelectors.getUserName);
    
    return (
        <>
            <UserMenu userName={userName} />
            <div>
                <Navigation />
                <Balance balance={balance} />
                <ExchangeBox />
            </div>
            <DiagramTab  />
        </>
    );
};

export default StatisticsPage;