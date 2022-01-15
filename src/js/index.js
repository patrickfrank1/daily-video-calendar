import '../css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../data/favicon-32x32.png';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
