import React from 'react';

import eclipseTablet from '../../../utils/images/eclipseTablet.png';
import frameTablet from './images/frameTablet.png';
import frame from './images/frame.png';

import s from './FinanceAppGirlImg.module.css';

const FinanceAppGirlImg = () => {

    return (
        <div className={s.container}>
            <div className={s.headContainer}>
                <img className={s.headImg1} src={frameTablet} alt="gklg" />
                <img
                className={s.headImg2}
                src={eclipseTablet}
                alt="gfgfg"
                />
            </div>
            <div className={s.bottomBackgroundImg}></div>
            <img
                className={s.desktopImg}
                src={frame}
                alt="кошелек"
                width="436"
                height="420"
            />
            <h1 className={s.headTitle}>Finance App</h1>
        </div>
    );
};

export default FinanceAppGirlImg;