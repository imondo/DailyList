import vueAxios from 'utils/axios';

export function login(data) {
  return vueAxios({
    url: 'usersByMobilePhone',
    method: 'POST',
    data: data
  });
}
