import axios from 'axios';
import store from 'store/index';
import APP_CONFIG from '../config';
import { getToken, removeToken } from './auth';
import { loginOut } from 'api/login';

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
  store.commit('SET_PROGRESS', true);
  return config;
}, error => {
  store.commit('SET_POPUPSTATE', true);
  store.commit('SET_POPUPMSG', error);
  return Promise.reject(error);
});

// 返回拦截
vueAxios.interceptors.response.use(response => {
  store.commit('SET_PROGRESS', false);
  return response;
}, error => {
  console.log();
  let errMsg = JSON.parse(JSON.stringify(error)).response.data.error;
  let status = JSON.parse(JSON.stringify(error)).response.status;
  store.commit('SET_POPUPSTATE', true);
  store.commit('SET_POPUPMSG', errMsg);
  store.commit('SET_PROGRESS', false);
  if (status === 400) {
    loginOut().then(() => {
      removeToken();
    });
  }
  return Promise.reject(error);
});

export default vueAxios;