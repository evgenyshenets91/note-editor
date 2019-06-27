// import jsonData from './data.json';

// export const fetchNotes = async () => JSON.parse(JSON.stringify(jsonData)).data;

export const fetchNotes = async () => {
  const response = await fetch('http://www.mocky.io/v2/5d14c8612f00004ca6c4f437');
  const data = await response.json();
  return data
} 

export const loadfetchNoteId = async (id) => {
  const response = await fetch('http://www.mocky.io/v2/5d14c8612f00004ca6c4f437');
  const data = await response.json();
  const elems = data.find(el => el.id === id);

  return elems
} 
