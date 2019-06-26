import {FETCH_NOTES_SUCCESS, SET_ACTIVE_NOTE, DELETE_ITEM, SEARCH_FILTER} from '../constants';
import * as R from 'ramda';

const initialState = {
  ids: [],
  activeNoteId: null,
  filter: ''
}

export default (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_NOTES_SUCCESS:
      return R.merge(state, {ids: R.pluck('id', payload)});
    case SET_ACTIVE_NOTE:
      return R.merge(state, {activeNoteId: payload});
    case DELETE_ITEM: 
      const newId = {
        ...state, 
        ids: R.without([payload], state.ids)
      }
      return newId;
    case SEARCH_FILTER:
      return R.merge(state, {filter: payload})

    default: 
      return state;
  }
}