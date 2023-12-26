import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import CurrencyIcon from './svg/CurrencyIcon/CurrencyIcon';
import CalculateIcon from '@mui/icons-material/Calculate';
import AnalyticsIcon from '@mui/icons-material/Analytics';

import pageNames from '../../utils/pageNamesList';

import s from './Navigation.module.css';

const Navigation = () => {
  const { pathname } = useLocation();

  const topList = Object.keys(pageNames).filter((key, i) => key && i <= 2);
  const bottomList = Object.keys(pageNames).filter((key, i) => key && i > 2);
  return (
    <nav className={s.container}>
      <ul className={s.navList}>
        {topList.map((key, i) => (
          <li
            key={i}
            className={key !== 'currency' ? s.navItem : s.navLastItem}
          >
            <NavLink
              exact="true"
              className={
                pathname === `/${key}`
                  ? `${s.links} ${s.activeLinks}`
                  : `${s.links}`
              }
              to={`/${key}`}
            >
              <div className={s.iconWrapper}>
                <div className={s.iconContainer}>
                  {pageNames[key] === 'Главная' ? (
                    <HomeIcon />
                  ) : pageNames[key] === 'Статистика' ? (
                    <TimelineIcon />
                  ) : (
                    <CurrencyIcon />
                  )}
                </div>
              </div>
              <span className={s.navTitle}>{pageNames[key]}</span>
            </NavLink>
          </li>
        ))}
        {/* <li className={s.navItem}>
          <NavLink
            exact="true"
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
        </li> */}
        {/* <li className={s.navLastItem}>
          <NavLink
            exact="true"
            className={s.links}
            activeClassName={s.activeLinks}
            to={'/currency'}
          >
            <CurrencyIcon />
          </NavLink>
        </li> */}
      </ul>
      <ul className={s.navBottomList}>
        {bottomList.map((key, i) => (
          <li key={i} className={s.budgetNavItem}>
            <NavLink
              exact="true"
              className={
                pathname === `/${key}`
                  ? `${s.budgetLinks} ${s.activeLinks}`
                  : `${s.budgetLinks}`
              }
              to={`/${key}`}
            >
              {pageNames[key] === 'Бюджет' ? (
                <CalculateIcon />
              ) : (
                <AnalyticsIcon />
              )}
              <span className={s.navTitle}>{pageNames[key]}</span>
            </NavLink>
          </li>
        ))}
        {/* <li className={s.navItem}>
          <NavLink
            exact="true"
            className={s.reportsLinks}
            activeClassName={s.activeLinks}
            to={'/reports'}
          >
            <AnalyticsIcon />
            <span className={s.navTitle}>Отчеты</span>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
