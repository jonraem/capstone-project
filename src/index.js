import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './utils/registerServiceWorker';
import store, { history } from './store'
import { config } from 'dotenv';

import App from './containers/App';
import './index.css'

config();
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
