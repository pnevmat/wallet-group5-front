import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="" name="register">
          <input
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
            type="text"
            placeholder="Пароль"
            name="password"
            onChange={e => {
              handleChange(e);
            }}
          />
        </label>
        <button type="submit">Вход</button>
        <NavLink to="/register">Регистрация</NavLink>
      </form>
    </div>
  );
};

export default LoginForm;
