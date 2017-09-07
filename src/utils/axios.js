import axios from 'axios';
import store from 'store/index';
import APP_CONFIG from '../config';
import { getToken } from './auth';

const vueAxios = axios.create({
  baseURL: 'https://leancloud.cn/1.1/'
});

// 请求拦截
vueAxios.interceptors.request.use(config =>{
  config.headers['X-LC-Id'] = APP_CONFIG.id;
  config.headers['X-LC-Key'] = APP_CONFIG.key;
  if (getToken()) {
    config.headers['X-LC-Session'] = getToken();
  }
  return config;
}, error => {
  store.commit('SET_POPUPSTATE', true);
  store.commit('SET_POPUPMSG', error);
  store.commit('SET_PROGRESS', true);
  return Promise.reject(error);
});

// 返回拦截
vueAxios.interceptors.response.use(response => response, error => {
  let errMsg = JSON.parse(JSON.stringify(error)).response.data.error;
  store.commit('SET_POPUPSTATE', true);
  store.commit('SET_POPUPMSG', errMsg);
  store.commit('SET_PROGRESS', false);
  return Promise.reject(error);
});

export default vueAxios;