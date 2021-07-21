import React, { Component } from 'react';
import Spinner from 'react-loader-spinner';
import s from './Loader.module.css';

export default class App extends Component {
  //other logic
  render() {
    return (
      <div className={s.spinner}>
        <Spinner
          type="ThreeDots"
          color="#00BFFF"
          // loading="true"
          height={80}
          width={80}
       
        />
      </div>
    );
  }
}