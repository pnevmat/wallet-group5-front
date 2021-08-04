import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import registrationOperation from '../redux/operations/registrationOperation';
import selectors from '../redux/selectors/registrationSelectors';

import AppBar from '../components/AppBar/AppBar';
import RegistrationForm from '../components/registrationForm/registrationForm';

import 'react-toastify/dist/ReactToastify.css';
import s from '../components/RegistrationPage/registrationPage.module.css';

const RegistrationPage = (props) => {
  const dispatch = useDispatch();
  const onRegistrationSubmit = userData => dispatch(registrationOperation(userData));

  const error = useSelector(selectors.registrationSelector);
  
  if (error && typeof error === 'string') {
    const notify = () => toast(`${error}`);
    notify();
  }

  return (
    <div className={s.container}>
      <ToastContainer />
      <AppBar {...props} />
      <RegistrationForm onRegistrationSubmit={onRegistrationSubmit} />
    </div>
  );
};

export default RegistrationPage;
