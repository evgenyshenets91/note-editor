import {FETCH_NOTE_ID_SUCCESS} from '../constants';
import * as R from 'ramda';

const initialState = {
  id: null
}

export default (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_NOTE_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop('id', payload)
      });

    default: 
      return state;
  }
}