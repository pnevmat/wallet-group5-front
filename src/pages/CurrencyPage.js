import React from 'react';

import CurrencyPageContainer from '../components/CurrencyPageContainer/CurrencyPageContainer';
import UserMenu from '../components/UserMenu/UserMenu';

const CurrencyPage = (props) => {
    return (
        <>
            <UserMenu />
            <CurrencyPageContainer props={props} />
        </>
    );
};

export default CurrencyPage;