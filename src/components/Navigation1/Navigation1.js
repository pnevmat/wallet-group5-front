import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import routes from '../../routes';
import authSelectors from '../../redux/selectors/authorisationSelectors/authorisationSelectors';
import s from './Navigation1.module.css';

// const s = authSelectors.getIsAuthenticated

export default function Navigation1() {
  //!!!!
  const isAuthenticated = useSelector(authSelectors.authorisation);
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