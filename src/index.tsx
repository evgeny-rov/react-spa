import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import rootReducer from './redux';
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleWare] });
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
