import {
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  SET_ACTIVE_NOTE,
  EDIT_NOTE
} from '../constants';
import { fetchNotes } from '../api/';

export const fetchData = () => async dispatch => {
  dispatch({type: FETCH_NOTES_START})
  try{
    const notes = await fetchNotes();
    console.log(notes)
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