import { createStore, applyMiddleware } from 'redux';
import createRootReducer from '../reducer';
import { routerMiddleware } from "connected-react-router";
import history from "../history";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(
  thunk,
  routerMiddleware(history)
  ))
)

// dev only
window.store = store;

export default store;