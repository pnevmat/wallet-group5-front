import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import LoginForm from '../components/LoginForm/LoginForm';
import AppBar from '../components/AppBar/AppBar';
import { loginRequest } from '../api/apiRequests';
import { getUserData } from '../redux/reducers/authorisationReducers/userDataReducer';
import { login } from '../redux/reducers/authorisationReducers/authorisationReducer';
import { isLogin } from '../redux/reducers/authorisationReducers/authReducer';
import errorCleanOperation from '../redux/operations/errorCleanOperation';
import selectors from '../redux/selectors/registrationSelectors';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/AppBar/FinanceAppBoyImg/FinanceAppBoyImg.module.css';
import ts from '../utils/toastifyStyles/toastify.module.css';

const HomePage = props => {
  const [loginData, setLoginData] = useState(false);
  console.log('Login data in home page state: ', loginData);
  const dispatch = useDispatch();

  const onLoginSubmit = async userData => {
    const { data } = await loginRequest(userData);
    if (data) setLoginData(data);
  };

  const error = useSelector(selectors.registrationSelector);

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
    return () => {
      dispatch(errorCleanOperation());
    };
  }, []);

  return (
    <div className={s.containerloginPages}>
      <ToastContainer />
      <AppBar {...props} />
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export default HomePage;
