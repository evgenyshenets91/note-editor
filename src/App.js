import React, {Component} from 'react';

import history from './history';
import {ConnectedRouter} from 'connected-react-router';
import { Provider } from 'react-redux';
import store from './store';

import './app.scss';
import NotesPage from './components/notes-page';

class App extends Component{ 

  render(){
    return (
      <div className='main-wrapper'>
        <Provider store={store}>
          <ConnectedRouter history={history} >
           <NotesPage/>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
