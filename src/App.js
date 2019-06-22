import React from 'react';

import history from './history';
import {ConnectedRouter} from 'connected-react-router';
import { Provider } from 'react-redux';
import store from './store';

import './app.scss';


function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} >
      <h1>Hello</h1>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
