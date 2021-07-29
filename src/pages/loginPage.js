import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loginOperation from '../redux/operations/loginOperation';
import selectors from '../redux/selectors/registrationSelectors';

import AppBar from '../components/AppBar/AppBar';
import LoginForm from '../components/loginForm/loginForm';

import s from '../components/AppBar/financeAppBoyImg/financeAppBoyImg.module.css';

const LoginPage = (props) => {
  const dispatch = useDispatch();
  
  const onLoginSubmit = userData => dispatch(loginOperation(userData));

  const error = useSelector(selectors.registrationSelector);

  if (error && typeof error === 'string') {
    alert(`${error}`);
  }

  return (
    <div className={s.containerloginPages}>
      <AppBar {...props} />
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export default LoginPage;
