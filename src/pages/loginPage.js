import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import loginOperation from '../redux/operations/loginOperation';
import selectors from '../redux/selectors/registrationSelectors';

import AppBar from '../components/AppBar/AppBar';
import LoginForm from '../components/loginForm/loginForm';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/AppBar/financeAppBoyImg/financeAppBoyImg.module.css';

const LoginPage = (props) => {
  const dispatch = useDispatch();
  
  const onLoginSubmit = userData => dispatch(loginOperation(userData));

  const error = useSelector(selectors.registrationSelector);

  if (error && typeof error === 'string') {
    const notify = () => toast(`${error}`);
    notify();
  }

  return (
    <div className={s.containerloginPages}>
      <ToastContainer />
      <AppBar {...props} />
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export default LoginPage;
