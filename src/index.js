import React from 'react';
import ReactDOM from 'react-dom';
import { config } from 'dotenv';
import registerServiceWorker from './utils/registerServiceWorker';
import './index.css';

import App from './components/App/App';

config();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
