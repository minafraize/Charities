import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://megakheir.herokuapp.com'
});

export default instance;