import axios from 'axios'
import { ElMessage } from 'element-plus'

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
  (res) => {
    const { status = '', data = {} } = res || {}
    const message = data.message || '未知错误,请打开控制台查看!'
    if (status !== 200) {
      ElMessage.error({ message })
      return Promise.reject(res)
    }
    return res
  },
  (err) => {
    ElMessage.error({ message: '未知错误,请打开控制台查看!' })
    return Promise.reject(err)
  }
)

export default instance
