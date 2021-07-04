import React from 'react';
import ReactDOM from 'react-dom';
import PhoneBook from './App'

import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <PhoneBook />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
