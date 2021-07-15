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
    <>
    {/* Эту разметку и ее стили нужно вынести в отдельный компонент
    так как он переиспользуется на странице регистрации */}
    {/* ======= */}
      <div className={s.containerloginPages}>
        {/* <div className={s.loginPages}>
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
        </div> */}
      {/* ========= */}
        <AppBar {...props} />
        <LoginForm onLoginSubmit={onLoginSubmit} />
      </div>
    </>
  );
};

export default LoginPage;