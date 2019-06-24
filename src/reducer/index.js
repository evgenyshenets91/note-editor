import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import notesPage from './notesPage';
import notes from './notes';

export default history => {
  return  combineReducers({
    router: connectRouter(history),
    notesPage,
    notes

  })
}
