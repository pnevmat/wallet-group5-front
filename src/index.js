import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import FinanceApp from './App';
import 'modern-normalize/modern-normalize.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <React.StrictMode>
        <BrowserRouter>
          <FinanceApp />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
);
