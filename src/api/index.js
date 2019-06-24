import jsonData from './data.json';

export const fetchNotes = async () => JSON.parse(JSON.stringify(jsonData)).data;