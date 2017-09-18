import vueAxios from 'utils/axios';

export function updateUser(userId, data) {
  return vueAxios({
    url: 'users/' + userId,
    method: 'PUT',
    data: data
  });
}

export function updatePassword(userId, data) {
  return vueAxios({
    url: 'users/' + userId + '/updatePassword',
    method: 'PUT',
    data: data
  });
}
