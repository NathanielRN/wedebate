import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // This is the main app component
  <App />,

  // Here we say we want to place our "App" object where the root id element is
  document.getElementById('root')
);
registerServiceWorker();
