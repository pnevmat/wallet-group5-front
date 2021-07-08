import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import HomeIcon from './svg/HomeIcon/HomeIcon';
import StatisticsIcon from './svg/StatisticsIcon/StatisticsIcon';
import CurrencyIcon from './svg/CurrencyIcon/CurrencyIcon';

const Navigation = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink
            exact
            className={s.links}
            activeClassName={s.activeLinks}
            to={'/dashboard'}
          >
            <HomeIcon />
            <span className={s.navTitle}>Главная</span>
          </NavLink>
        </li>

        <li className={s.navItem}>
          <NavLink
            exact
            className={s.links}
            activeClassName={s.activeLinks}
            to={'/statistics'}
          >
            <StatisticsIcon /> <span className={s.navTitle}>Статистика</span>
          </NavLink>
        </li>

        <li className={s.navLastItem}>
          <CurrencyIcon />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
