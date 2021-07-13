import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import registrationOperation from '../redux/operations/registrationOperation';
import selectors from '../redux/selectors/registrationSelectors';

import RegistrationForm from '../components/registrationForm/registrationForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const onRegistrationSubmit = userData =>
    dispatch(registrationOperation(userData));

  const error = useSelector(selectors.registrationSelector);
  console.log(error);

  if (error && typeof error === 'string') {
    alert(`${error}`);
  }

  return (
    <RegistrationForm onRegistrationSubmit={onRegistrationSubmit} />
  );
};

export default RegistrationPage;
