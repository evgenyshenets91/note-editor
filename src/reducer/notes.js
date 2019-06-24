import {FETCH_NOTES_SUCCESS, EDIT_NOTE} from '../constants';
import * as R from 'ramda';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch(type){
    case FETCH_NOTES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), payload)
      return R.merge(state, newValue);
    case EDIT_NOTE:
      const {noteId, note} = payload;
      const newState = {...state};
      const newNote = {
        ...newState[noteId],
       ...note
      };
      return {
        ...newState,
        [noteId] : newNote
      }
    default:
      return state;
  }
}