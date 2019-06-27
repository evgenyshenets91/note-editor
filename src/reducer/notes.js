import {FETCH_NOTES_SUCCESS, EDIT_NOTE, FETCH_NOTE_ID_SUCCESS, CREATE_NEW_NOTE} from '../constants';
import * as R from 'ramda';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case FETCH_NOTES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), payload)
      const newNotes = {
        ...newValue,
        ...state
      };
      return R.merge(state, newNotes);
    case EDIT_NOTE:
      const {noteId, note} = payload;
      const newState = {...state};
      const newNote = {
        ...newState[noteId],
       ...note,
       id: noteId
      };
      return {
        ...newState,
        [noteId] : newNote
      }

    case FETCH_NOTE_ID_SUCCESS:
      return R.assoc(payload.id, payload, state);

    case CREATE_NEW_NOTE:
      const newItem = {
        ...state,
        [payload.id]: payload
      }
      return newItem;

    default:
      return state;
  }
}