import axios from 'axios'

const api = axios.create({
  baseURL: 'https://produtos-sistema-api.herokuapp.com',
})

export default api
