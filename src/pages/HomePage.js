import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../components/loginForm/loginForm';
import AppBar from '../components/AppBar/AppBar';
import HomeComponent from '../components/HomePage/HomeComponent';

import loginOperation from '../redux/operations/loginOperation';
import selectors from '../redux/selectors/registrationSelectors';

import s from '../components/AppBar/financeAppBoyImg/financeAppBoyImg.module.css';

const HomePage = (props) => {
  const dispatch = useDispatch();
  
  const onLoginSubmit = userData => dispatch(loginOperation(userData));

  const error = useSelector(selectors.registrationSelector);

  if (error && typeof error === 'string') {
    alert(`${error}`);
  }

  return (
    <>
      <h2>Главная страница</h2>
      <div className={s.containerloginPages}>
        <AppBar {...props} />
        <LoginForm onLoginSubmit={onLoginSubmit} />
      </div>
      {/* <HomeComponent /> */}
    </>
  );
};
export default HomePage;