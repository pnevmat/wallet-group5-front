import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import loginOperation from '../redux/operations/loginOperation';
import selectors from '../redux/selectors/registrationSelectors/registrationSelectors';

import LoginForm from '../components/loginForm/loginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLoginSubmit = userData => dispatch(loginOperation(userData));

  const error = useSelector(selectors.registrationSelector);

  if (error && typeof error === 'string') {
    alert(`${error}`);
  }

  return (
    <>
      <div>
        <img src="#" alt="кошелек" />
        <h1>Wallet</h1>
      </div>
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </>
  );
};

export default LoginPage;
