import axios from 'axios';

const api = axios.create({
    baseURL: 'https://psychonauts-api.herokuapp.com/api/characters?limit=2'
    
});

export default api;