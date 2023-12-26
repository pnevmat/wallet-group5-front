import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { registrationRequest } from '../api/apiRequests';
import { registration } from '../redux/reducers/registrationReducers/registrationReducer';
import { getRegUserData } from '../redux/reducers/registrationReducers/userDataReducer';
import { isRegistered } from '../redux/reducers/authorisationReducers/authReducer';
import errorCleanOperation from '../redux/operations/errorCleanOperation';
import selectors from '../redux/selectors/registrationSelectors';

import AppBar from '../components/AppBar/AppBar';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/RegistrationPage/registrationPage.module.css';
import ts from '../utils/toastifyStyles/toastify.module.css';

const RegistrationPage = props => {
  const dispatch = useDispatch();

  const onRegistrationSubmit = async userData => {
    const { user } = await registrationRequest(userData);
    if (user) {
      console.log('Registration response: ', user);
      dispatch(registration(user));
      dispatch(getRegUserData(user));
      dispatch(isRegistered());
    }
  };

  const error = useSelector(selectors.registrationSelector);

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
  }, [onRegistrationSubmit]);

  return (
    <div className={s.container}>
      <ToastContainer />
      <AppBar {...props} />
      <RegistrationForm onRegistrationSubmit={onRegistrationSubmit} />
    </div>
  );
};

export default RegistrationPage;
