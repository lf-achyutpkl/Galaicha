import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../assets/css/custom-design.css';
import '../assets/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';

ReactDOM.render(Routes, document.querySelector('#app-container'));
