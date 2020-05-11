import axios from 'axios'
import qs from 'qs';

let Base_URL =  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/'
axios.defaults.baseURL = Base_URL
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {

// 在发送请求之前做些什么 User-Agent
if (config.method === 'post') {
  config.data = qs.stringify(config.data)
}
return config;
}, function (error) {
// 对请求错误做些什么
return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data) {
    return response.data
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export default axios