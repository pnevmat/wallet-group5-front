import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
// import HomeIcon from './svg/HomeIcon/HomeIcon';
import HomeIcon from '@mui/icons-material/Home';
// import StatisticsIcon from './svg/StatisticsIcon/StatisticsIcon';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyIcon from './svg/CurrencyIcon/CurrencyIcon';
import CalculateIcon from '@mui/icons-material/Calculate';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Navigation = () => {
  return (
    <nav className={s.container}>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink
            exact
            className={s.links}
            activeClassName={s.activeLinks}
            to={'/dashboard'}
          >
            <div className={s.iconWrapper}>
              <div className={s.iconContainer}>
                <HomeIcon />
              </div>
            </div>
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
            <div className={s.iconWrapper}>
              <div className={s.iconContainer}>
                <TimelineIcon />
              </div>
            </div>
            <span className={s.navTitle}>Статистика</span>
          </NavLink>
        </li>
        <li className={s.navLastItem}>
          <NavLink
            exact
            className={s.links}
            activeClassName={s.activeLinks}
            to={'/currency'}
          >
            <CurrencyIcon />
          </NavLink>
        </li>
      </ul>
      <ul className={s.navBottomList}>
        <li className={s.budgetNavItem}>
          <NavLink
            exact
            className={s.budgetLinks}
            activeClassName={s.activeLinks}
            to={'/budget'}
          >
            <CalculateIcon />
            <span className={s.navTitle}>Бюджет</span>
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            exact
            className={s.reportsLinks}
            activeClassName={s.activeLinks}
            to={'/reports'}
          >
            <AnalyticsIcon />
            <span className={s.navTitle}>Отчеты</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
