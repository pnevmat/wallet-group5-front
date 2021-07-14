import React from 'react';

import eclipseTablet from './images/frameTablet.png';
import frameTablet from './images/eclipseTablet.png';
import frame from './images/frame.png';

import s from './financeAppBoyImg.module.css';

const FinanceAppBoyImg = () => {
    return (
        <div className={s.containerloginPages}>
            <div className={s.loginPages}>
                <div className={s.logiPagedox}>
                    <img
                    className={s.logiPagedoxImg1}
                    src={eclipseTablet}
                    alt="gfgfg"
                    />
                    <img className={s.logiPagedoxImg2} src={frameTablet} alt="gklg" />
                </div>
                <div className={s.loginPageVrap}></div>
                <img
                    className={s.loginPagesImg}
                    src={frame}
                    alt="кошелек"
                    width="436"
                    height="420"
                />
                <h1 className={s.loginPageName}>Finance App</h1>
            </div>
        </div>
    );
};

export default FinanceAppBoyImg;