import * as R from 'ramda';

export const getNotesById = (state, id) => R.prop(id, state.notes);

export const getNotes = state => {

  const notesInArray =  R.compose(
    R.map(id => getNotesById(state, id))   
  )(state.notesPage.ids); 

  const filteredNotes = notesInArray.filter(el => {
    const {tags, ...rest} = el;
    return  tags.some(item => item.includes(state.notesPage.filter)) ? el : null;
  })
  return state.notesPage.filter === '' ? notesInArray : filteredNotes
}

  