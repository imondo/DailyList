import Cookies from 'js-cookie';

const KEY = 'TOKEN';

export function getToken() {
  return Cookies.get(KEY);
}

export function setToken(token) {
  return Cookies.set(KEY, token);
}

export function removeToken() {
  return Cookies.remove(KEY);
}