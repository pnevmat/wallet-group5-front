import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '.header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <NavLink exact to="/homepage" className={s.homeLink}>
        {/* <img src={logo} alt="Logo" className={s.logoHeader} /> */}
        <span className={s.logoText}>
          <svg className={s.logoHeader}>
            <use
              className={s.logoHeader}
              href="../../sprite/symbol-defs.svg#icon-Wallet"
            ></use>
          </svg>
          Wallet
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
