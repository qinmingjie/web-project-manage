import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8881',
  method: 'GET',
  timeout: 60000
})

instance.interceptors.request((config) => {
  return config
})

instance.interceptors.response(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)
