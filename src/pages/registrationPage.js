import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import s from '../components/AppBar/financeAppGirlImg/financeAppGirlImg.module.css';

import registrationOperation from '../redux/operations/registrationOperation';
import selectors from '../redux/selectors/registrationSelectors';

import AppBar from '../components/AppBar/AppBar';
import RegistrationForm from '../components/registrationForm/registrationForm';

const RegistrationPage = (props) => {
  const dispatch = useDispatch();
  const onRegistrationSubmit = userData =>
    dispatch(registrationOperation(userData));

  const error = useSelector(selectors.registrationSelector);
  console.log(error);

  if (error && typeof error === 'string') {
    alert(`${error}`);
  }

  return (
    <>
    <div className={s.containerloginPages}>
    <AppBar {...props} />
      <RegistrationForm onRegistrationSubmit={onRegistrationSubmit} />
    </div>
      
    </>
  );
};

export default RegistrationPage;
