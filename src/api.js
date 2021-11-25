import axios from 'axios';

const api = axios.create({
    baseURL: 'https://psychonauts-api.herokuapp.com/api/characters?limit=9'
    
});

export default api;