// import jsonData from './data.json';

// export const fetchNotes = async () => JSON.parse(JSON.stringify(jsonData)).data;

export const fetchNotes = async () => {
  const response = await fetch('http://www.mocky.io/v2/5d12791a31000050c508d38c');

  const data = await response.json();

  return data
} 

export const loadfetchNoteId = async (id) => {
  const response = await fetch('http://www.mocky.io/v2/5d12791a31000050c508d38c');
  const data = await response.json();
  const elems = data.find(el => el.id === id);

  return elems
} 
