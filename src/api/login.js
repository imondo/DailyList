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

export function weiBoAuth() {
  WB2.anyWhere(function(W){
    W.parseCMD('/users/show.json', function(oResult, bStatus) {
      if(bStatus) {
        //to do something...
      }
    }, {
      screen_name : '姚晨'
    }, {
      method : 'get',
      cache_time : 30
    });
  });
}
