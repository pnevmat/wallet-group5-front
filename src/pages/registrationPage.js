import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { registrationRequest } from '../api/apiRequests';
import { registration } from '../redux/reducers/authorisationReducers/authorisationReducer';
import { getRegUserData } from '../redux/reducers/registrationReducers/userDataReducer';
import { isRegistered } from '../redux/reducers/authorisationReducers/authReducer';

import AppBar from '../components/AppBar/AppBar';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/RegistrationPage/registrationPage.module.css';
import ts from '../utils/toastifyStyles/toastify.module.css';

const RegistrationPage = props => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const onRegistrationSubmit = async userData => {
    const { user, error } = await registrationRequest(userData);
    if (user) {
      dispatch(registration(user));
      dispatch(getRegUserData(user));
      dispatch(isRegistered());
    }

    if (error) {
      setError(error);
    }
  };

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
    <div className={s.container}>
      <ToastContainer />
      <AppBar {...props} />
      <RegistrationForm onRegistrationSubmit={onRegistrationSubmit} />
    </div>
  );
};

export default RegistrationPage;
