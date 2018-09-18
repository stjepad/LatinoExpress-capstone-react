import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LatinoExpress from './LatinoExpress';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Router><LatinoExpress /></Router>, document.getElementById('root'));
registerServiceWorker();
