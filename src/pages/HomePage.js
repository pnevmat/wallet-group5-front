import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import LoginForm from '../components/loginForm/loginForm';
import AppBar from '../components/AppBar/AppBar';

import loginOperation from '../redux/operations/loginOperation';
import errorCleanOperation from '../redux/operations/errorCleanOperation';
import selectors from '../redux/selectors/registrationSelectors';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/AppBar/financeAppBoyImg/financeAppBoyImg.module.css';
import ts from '../utils/toastifyStyles/toastify.module.css';

const HomePage = (props) => {
  const dispatch = useDispatch();
  
  const onLoginSubmit = userData => dispatch(loginOperation(userData));

  const error = useSelector(selectors.registrationSelector);

  useEffect(() => {
    if (error && typeof error === 'string') {
      const toastId = 2
      const notify = () => {
        toast(`${error}`,{
          toastId: toastId,
          className: ts.error
        });
      }
      notify();
    }
    return () => {
      dispatch(errorCleanOperation());
    }
  }, [onLoginSubmit]);

  return (
    <div className={s.containerloginPages}>
      <ToastContainer />
      <AppBar {...props} />
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </div>
  );
};

export default HomePage;
