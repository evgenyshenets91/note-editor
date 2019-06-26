import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import notesPage from './notesPage';
import notePage from './notePage';
import notes from './notes';

export default history => {
  return  combineReducers({
    router: connectRouter(history),
    notePage,
    notesPage,
    notes
  })
}
