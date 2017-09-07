import vueAxios from 'utils/axios';
import AV from 'leancloud-storage';

export function login(data) {
  return vueAxios({
    url: 'login',
    method: 'POST',
    data: data
  });
}

export function register(data) {
  return vueAxios({
    url: 'usersByMobilePhone',
    method: 'POST',
    data: data
  });
}

export function smsCode(mobile) {
  return vueAxios({
    url: 'requestSmsCode',
    method: 'POST',
    data: {
      mobilePhoneNumber: mobile
    }
  });
}

export function loginOut() {
  return AV.User.logOut();
}

export function currentUser() {
  return vueAxios({
    url: 'users/me',
    method: 'GET'
  })
}
