import * as R from 'ramda';

export const getNotesById = (state, id) => R.prop(id, state.notes);

export const getNotes = state => {



  const filteredMap =  R.compose(
    R.map(id => getNotesById(state, id))   
  )(state.notesPage.ids); 


  const mapa = filteredMap.filter(el => {
    const {id, text, title, tags} = el;
    if(tags.includes(state.notesPage.filter)){
       return el
    }
  })
  console.log(mapa)
  return state.notesPage.filter == '' ? filteredMap : mapa
  
  }