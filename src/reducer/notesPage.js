import {FETCH_NOTES_SUCCESS, SET_ACTIVE_NOTE} from '../constants';
import * as R from 'ramda';

const initialState = {
  ids: [],
  activeNoteId: null
}

export default (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_NOTES_SUCCESS:
      return R.merge(state, {ids: R.pluck('id', payload)});
    case SET_ACTIVE_NOTE:
      return R.merge(state, {activeNoteId: payload});

    default: 
      return state;
  }
}