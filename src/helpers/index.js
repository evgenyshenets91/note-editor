import * as R from 'ramda';

const getNotesById = (state, id) => R.prop(id, state.notes);

export const getNotes = state => {
  const notes = R.map(id => getNotesById(state, id), state.notesPage.ids);
  return notes
}