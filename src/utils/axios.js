import axios from 'axios';
import APP_CONFIG from '../config';

const vueAxios = axios.create({
  baseURL: 'https://leancloud.cn/1.1/'
});

// 请求拦截
vueAxios.interceptors.request.use(config =>{
  config.headers['X-LC-Id'] = APP_CONFIG.id;
  config.headers['X-LC-Key'] = APP_CONFIG.key;
  return config;
}, error => {
  return Promise.reject(error);
});

// 返回拦截
vueAxios.interceptors.response.use(response => response, error => {
  return Promise.reject(error);
});

export default vueAxios;