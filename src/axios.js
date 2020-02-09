import axios from 'axios';

const instance = axios.create({
    baseURL:'https://ahorro-personal-4db90.firebaseio.com/'
});

export default instance;