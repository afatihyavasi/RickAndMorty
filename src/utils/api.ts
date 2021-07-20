import axios from 'axios';

export default axios.create({
   baseURL: 'https://rickandmortyapi.com/api/character',
   headers: { 'Content-Type': 'application/json' },
});
