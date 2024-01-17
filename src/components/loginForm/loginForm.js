import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FormAuth from '../FormAuth/FormAuth';
import { validate, messages } from '../../utils/validation/loginFormValidate';

import s from './LoginForm.module.css';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validMassage, setValidMessage] = useState({ email: {}, password: {} });
  const [isRegBtnActive, setIsRegBtnActive] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        setValidMessage({ ...validMassage, email: {} });
        break;
      case 'password':
        setPassword(value);
        setValidMessage({ ...validMassage, password: {} });
        break;
      default:
        console.log('error');
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    if (
      (name === 'email' && email === '') ||
      (name === 'password' && password === '')
    ) {
      return {
        ...validMassage,
        [name]: { name, message: messages.required(name) },
      };
    }

    if (
      (name === 'email' && email !== '') ||
      (name === 'password' && password !== '')
    ) {
      const validation = validate[name];
      const result = validation(value);

      if (!result) {
        return {
          ...validMassage,
          [name]: {
            name,
            message:
              name === 'email'
                ? messages['email.email']
                : messages['password.min'],
          },
        };
      }
    }

    return validMassage;
  };

  const handleSubmit = e => {
    const { onLoginSubmit } = props;

    if (email === '' && password === '') {
      setValidMessage({
        email: { name: 'email', message: messages.required('email') },
        password: { name: 'password', message: messages.required('password') },
      });

      return;
    }

    if (email === '') {
      setValidMessage({
        ...validMassage,
        email: { name: 'email', message: messages.required('email') },
      });

      return;
    }

    if (password === '') {
      setValidMessage({
        ...validMassage,
        password: { name: 'password', message: messages.required('password') },
      });

      return;
    }

    if (validMassage.email.name || validMassage.password.name) return;

    onLoginSubmit({ email, password });
  };

  return (
    <div className={s.container}>
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <FormAuth />
        <label htmlFor="" name="register" className={s.label}>
          <input
            className={s.input__email}
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={e => {
              handleChange(e);
            }}
            onBlur={e => setValidMessage(handleBlur(e))}
          />
          {validMassage?.email.name === 'email' && (
            <span className={s.validationMessage}>
              {validMassage.email.message}
            </span>
          )}
        </label>
        <label className={s.label}>
          <input
            className={s.input__password}
            type="text"
            placeholder="Пароль"
            name="password"
            onChange={e => {
              handleChange(e);
            }}
            onBlur={e => setValidMessage(handleBlur(e))}
          />
          {validMassage?.password.name === 'password' && (
            <span className={s.validationMessage}>
              {validMassage.password.message}
            </span>
          )}
        </label>
        <button className={s.button__submit} type="submit">
          Вход
        </button>
        <NavLink
          className={
            !isRegBtnActive
              ? s.button__registration
              : `${s.button__registration} ${s.active}`
          }
          onMouseOver={() => setIsRegBtnActive(true)}
          onMouseLeave={() => setIsRegBtnActive(false)}
          to="/register"
        >
          Регистрация
        </NavLink>
      </form>
    </div>
  );
};

export default LoginForm;
