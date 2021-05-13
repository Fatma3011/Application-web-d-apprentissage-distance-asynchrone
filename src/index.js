import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import "bootstrap/dist/css/bootstrap.min.css"
import    Profile from './components/teacherComponents/Profile'

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

