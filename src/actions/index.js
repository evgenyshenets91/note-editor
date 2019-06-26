import {
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  SET_ACTIVE_NOTE,
  EDIT_NOTE,
  FETCH_NOTE_ID_START,
  FETCH_NOTE_ID_SUCCESS,
  FETCH_NOTE_ID_FAILURE,
  DELETE_ITEM,
  SEARCH_FILTER
} from '../constants';
import { fetchNotes, loadfetchNoteId } from '../api/';
import * as R from 'ramda';

export const fetchData = () => async (dispatch) => {
  dispatch({type: FETCH_NOTES_START})
  try{
    const notes = await fetchNotes();
    dispatch({
      type: FETCH_NOTES_SUCCESS,
      payload: notes
    })

  } catch(err){
    dispatch({
      type: FETCH_NOTES_FAILURE,
      payload: err,
      error:true
    })
  }
  
}

export const setActiveNote = (noteId) => ({
  type: SET_ACTIVE_NOTE,
  payload: noteId
})

export const editNote = (noteId, note) => ({
  type: EDIT_NOTE,
  payload: {noteId,  note}
})

export const fetchNoteId = id => async (dispatch, getState) => {
  console.log(getState())

    dispatch({type: FETCH_NOTE_ID_START})
    try{
      const notes = await loadfetchNoteId(id);
      dispatch({
        type: FETCH_NOTE_ID_SUCCESS,
        payload: notes
      })
  
    } catch(err){
      dispatch({
        type: FETCH_NOTE_ID_FAILURE,
        payload: err,
        error:true
      })
    }

}

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
})

export const searchFilter = (value) => ({
  type: SEARCH_FILTER,
  payload: value
})