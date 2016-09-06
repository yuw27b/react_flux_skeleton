import React from 'react';
import ReactDOM from 'react-dom';
import ActionCreator from './ActionCreator';
import App from './App.jsx';

'use strict';

window.addEventListener('load', () => {
  ActionCreator.loadInitData().then(() => {
    ReactDOM.render(
      <App />,
      document.getElementById('app')
    );
  });
}, false);
