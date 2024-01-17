import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { loginRequest } from '../api/apiRequests';
import { login } from '../redux/reducers/authorisationReducers/authorisationReducer';
import { getUserData } from '../redux/reducers/authorisationReducers/userDataReducer';
import { isLogin } from '../redux/reducers/authorisationReducers/authReducer';

import AppBar from '../components/AppBar/AppBar';
import LoginForm from '../components/LoginForm/LoginForm';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/AppBar/FinanceAppBoyImg/FinanceAppBoyImg.module.css';
import ts from '../utils/toastifyStyles/toastify.module.css';

const LoginPage = props => {
  const [loginData, setLoginData] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onLoginSubmit = async userData => {
    const { data, error } = await loginRequest(userData);
    if (data) setLoginData(data);
    if (error) setError(error);
  };

  useEffect(() => {
    if (loginData) {
      dispatch(getUserData(loginData));
      dispatch(login(loginData));
      dispatch(isLogin());
    }
  }, [dispatch, loginData]);

  useEffect(() => {
    if (error && typeof error === 'string') {
      const toastId = 2;
      const notify = () => {
        toast(`${error}`, {
          toastId: toastId,
          className: ts.error,
        });
      };
      notify();
    }
  }, [dispatch, error]);

  return (
    <div className={s.containerloginPages}>
      <ToastContainer />
      <AppBar {...props} />
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export default LoginPage;
