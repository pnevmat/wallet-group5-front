import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import frame from '../components/loginForm/images/frame.png';
import s from '../components/loginForm/loginForm.module.css';

import eclipseTablet from '../components/loginForm/images/frameTablet.png';
import frameTablet from '../components/loginForm/images/eclipseTablet.png';

import loginOperation from '../redux/operations/loginOperation';
import selectors from '../redux/selectors/registrationSelectors/registrationSelectors';

import FormAuth from '../components/FormAuth/FormAuth';
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
      <FormAuth />
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
        <LoginForm onLoginSubmit={onLoginSubmit} />
      </div>
    </>
  );
};

export default LoginPage;
