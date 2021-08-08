import axios from 'axios'
import { message } from 'ant-design-vue'
let baseURL = "";
if (process.env.NODE_ENV === "development") {
  baseURL = "/api";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "/";
}

const service = axios.create({
  baseURL: baseURL, // api的base_url
  timeout: 200000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})

const errorHandler = (error) => {
  if (error && error.stack.indexOf('timeout') > -1) {
    message.error('网络请求超时')
  }
  if (error && error.code === 500) {
    message.error('系统错误，请重试')
  }
  const data = error.response.data
  // 从 localstorage 获取 token
  const token = storage.get(ACCESS_TOKEN)
  if (data.code === 401) {
    message.error(data.message)
    if (token) {
      store.dispatch('Logout').then(() => {
        setTimeout(() => {
          window.location.reload()
        }, 1500)
      })
    }
  }
  if (data.code === 405) {
    message.error(data.message)
  }
  if (data.code === 503) {
    message.error(data.message)
  }
  if (error.response) {
    const data = error.response.data
    console.log('请求网络返回数据为')
    console.log(data)
    // 从 localstorage 获取 token
    if (error.response.data.code === 403) {
      message.error(data.message)
    }
    if (error.response.status === 404) {
      message.error('404！文件丢失或权限不足')
    }
  }
  return Promise.reject(error)
}

service.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token        
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
    const token = localStorage.getItem('token');
    token && (config.headers['Authorization'] = token);
    return config;
  }, errorHandler
)

service.interceptors.response.use(
  config => {
    console.log("请求返回的数据为：", config)
    return config;
  },
  errorHandler
)

class Server {
  get = async (url, params) => {
    try {
      return await service.get(url, params);
    } catch (error) {
      console.log('error:', error);
    }
  }

  post = async (url, params) => {
    try {
      return await service.post(url, params);
    } catch (error) {
      console.log('error:', error);
    }
  }
}

export default new Server()

