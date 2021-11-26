import axios from 'axios';

const Personagens = axios.create({
    baseURL: 'https://psychonauts-api.herokuapp.com/api/characters?limit=50'
    
});

export default Personagens;