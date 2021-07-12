import React from 'react';
import styles from './FormAuth.module.css';

const FormAuth = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.logo_container}>
      <img src="/Group.svg" alt="кошелек" className={styles.logo} />
      <h1 className={styles.title}>Wallet</h1>
    </div>
    <div>{children}</div>
  </div>
);

export default FormAuth;
