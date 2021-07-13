import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FormAuth from '../FormAuth/FormAuth';

import s from './registrationForm.module.css';

const RegistrationForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatePassword] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'repeatPassword':
        setRepeatePassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        console.log('error');
    }
  };

  const handleSubmit = () => {
    const { onRegistrationSubmit } = props;

    onRegistrationSubmit({ email, password, repeatPassword, name });
  };

  return (
    <div>
      <form
        className={s.form}
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <FormAuth />
        <label htmlFor="" name="register" className={s.label}>
          <div className={s.input_email}></div>
          <input
            className={s.input}
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <label className={s.label}>
          <div className={s.input_password}></div>
          <input
            className={s.input}
            type="text"
            placeholder="Пароль"
            name="password"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <label className={s.label}>
          <div className={s.input_password}></div>
          <input
            className={s.input}
            type="text"
            placeholder="Подтвердите пароль"
            name="repeatPassword"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <label className={s.label}>
          <div className={s.input_name}></div>
          <input
            className={s.input}
            type="text"
            placeholder="Ваше имя"
            name="name"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <button type="submit" className={s.button_registr}>
          Регистрация
        </button>
        <button className={s.button_entrance}>
          <NavLink to="/login">Вход</NavLink>
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
