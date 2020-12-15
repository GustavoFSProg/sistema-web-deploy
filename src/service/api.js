import axios from 'axios'

const api = axios.create({
  // baseURL: 'https://produtos-sistema-api.herokuapp.com',
  baseURL: 'http://localhost:3001',
})

export default api
