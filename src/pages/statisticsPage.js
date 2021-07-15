import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

import UserMenu from '../components/UserMenu/UserMenu';
import Navigation from '../components/Navigation/Navigation';
import Balance from '../components/balance/balance';
import DiagramTab from '../components/diagramTab/diagramTab';

import authSelectors from '../redux/selectors/authorisationSelectors';
import statisticsSelectors from '../redux/selectors/statisticsSelector';

const StatisticsPage = () => {
    const balanceData = useSelector(statisticsSelectors.getStatisticsTransactions);
    const balance = useEffect(() => {
        if (balanceData) {
            const balance = balanceData.incomeBalance - balanceData.costBalance;
            return balance;
        }
    }, []);
    
    const userName = useSelector(authSelectors.getUserName);
    
    return (
        <>
            <UserMenu userName={userName} />
            <div>
                <Navigation />
                <Balance balance={balance} />
            </div>
            <DiagramTab  />
        </>
    );
};

export default StatisticsPage;