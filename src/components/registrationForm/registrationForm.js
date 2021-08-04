import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import FormAuth from '../FormAuth/FormAuth';


import s from './registrationForm.module.css';

import { Formik } from 'formik';
import * as yup from 'yup';


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
  
  const handleSubmit = ({email, password, repeatPassword, name}) => {
    const { onRegistrationSubmit } = props;

    onRegistrationSubmit({ email, password, repeatPassword, name });
  };

  const validationsSchema = yup.object().shape({
    email: yup
      .string()
      .email('Введите верный email')
      .required('Обязательное поле'),
    password: yup
      .string()
      .min(6)
      .max(12)
      .typeError('должно быть строкой')
      .required('Обязательное поле'),
    repeatPassword: yup
      .string()
      .min(6)
      .max(12)
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательное поле'),
    name: yup.string().min(1).max(12).required('Обязательное поле'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        repeatPassword: '',
        name: '',
      }}
      validateOnBlur
      validationSchema={validationsSchema}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      {({
   
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div className={s.container}>
          <form
            className={s.form}
            onSubmit={e => {
              e.preventDefault();
              handleSubmit(values);
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
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
            </label>
            {touched.email && errors.email && (
              <div className={s.formik_container}>
                <p className={s.formik}>{errors.email}</p>
              </div>
            )}
            <label className={s.label}>
              <div className={s.input_password}></div>
              <input
                className={s.input}
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
            </label>
            {touched.password && errors.password && (
              <div className={s.formik_container}>
                <p className={s.formik}>{errors.password}</p>
              </div>
            )}

            <label className={s.label}>
              <div className={s.input_password}></div>
              <input
                className={s.input}
                type="password"
                placeholder="Подтвердите пароль"
                name="repeatPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
             
            </label>
          



            <div className={s.progresBar}>
              <div className={s.progresBarFilter}></div>
            </div>
            {touched.repeatPassword && errors.repeatPassword && (
              <div className={s.formik_container}>
                <p className={s.formik}>{errors.repeatPassword}</p>
              </div>
            )}

            <label className={s.label}>
              <div className={s.input_name}></div>
              <input
                className={s.input}
                type="text"
                placeholder="Ваше имя"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
            </label>
            {touched.name && errors.name && (
              <div className={s.formik_container}>
                <p className={s.formik}>{errors.name}</p>
              </div>
            )}
            <button
              disabled={!isValid && !dirty}
              onClick={handleBlur}
              type="submit"
              className={s.button_registr}
            >
              Регистрация
            </button>
            <button className={s.button_entrance}>
              <NavLink to="/login">Вход</NavLink>
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
