import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import routes from '../../routes';
import { authSelectors } from '../../redux/selectors/authSelectors';
// import s from './Navigation.module.css';

const s = authSelectors.getIsAuthenticated

export default function Navigation() {
  //!!!!
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
      <nav>
        <NavLink
          to = '/'
          // to={routes.home}
          exact
          className={s.NavLink}
          activeClassName={s['NavLink-active']}
        >
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink
            to = '/main'
            // to={routes.main}
            exact
            className={s.NavLink}
            activeClassName={s['NavLink-active']}
          >
            Phonebook
          </NavLink>
        )}
      </nav>
  );
};