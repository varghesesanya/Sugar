import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './Context';

ReactDOM.render(
<ProductProvider>
    <Router>
        <App /> 
    </Router>
</ProductProvider>,
document.getElementById('root')

);

serviceWorker.unregister();
