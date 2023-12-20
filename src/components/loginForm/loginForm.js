import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FormAuth from '../FormAuth/FormAuth';

import s from './LoginForm.module.css';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('error');
    }
  };

  const handleSubmit = () => {
    const { onLoginSubmit } = props;

    onLoginSubmit({ email, password });
  };

  return (
    <div className={s.container}>
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormAuth />
        <label htmlFor="" name="register">
          <input
            className={s.input__email}
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <label>
          <input
            className={s.input__password}
            type="text"
            placeholder="Пароль"
            name="password"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <button className={s.button__submit}   type="submit">
          Вход
        </button>
        <NavLink 
        className={s.button__registration} 
        to="/register"
        activeClassName={s.active}
        >
          Регистрация
        </NavLink>
      </form>
    </div>
  );
};

export default LoginForm;
