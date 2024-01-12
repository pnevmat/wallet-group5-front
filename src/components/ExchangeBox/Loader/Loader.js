import React, { Component } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import s from './Loader.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={s.spinner}>
        <MutatingDots type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
}
