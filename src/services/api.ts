import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-protection.herokuapp.com'
})

export default api;