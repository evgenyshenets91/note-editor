import React, {Component} from 'react';

import history from './history';
import {ConnectedRouter} from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store';


import './app.scss';
import NotesPage from './components/notes-page';
import NoteItem from './components/note';

class App extends Component{ 

  render(){
    return (
      <div className='main-wrapper'>
        <Provider store={store}>
          <ConnectedRouter history={history} >
          <Switch>
            <Route path='/note/:id' component={NoteItem} />
            <Route path='/' component={NotesPage} /> 

          </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
