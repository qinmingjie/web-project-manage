import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8881',
  method: 'GET',
  timeout: 60000
})

instance.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

export default instance
