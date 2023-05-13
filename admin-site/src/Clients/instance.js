import axios from 'axios'

export const getAuthorizationHeader = () =>
  `${window.localStorage.token ? window.localStorage.token : ''}`
export const instance = axios.create({
  baseURL: 'https://sod-dent-api-v1.onrender.com/',
  // baseURL: 'http://localhost:7000/',
  timeout: 5000,
  headers: {
    authorization: getAuthorizationHeader(),
  },
})
