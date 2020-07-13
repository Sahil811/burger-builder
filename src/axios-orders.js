import axios from 'axios';

const instance = axios.create({
           baseURL:'https://react-burger-dbc89.firebaseio.com/'
});

export default instance;