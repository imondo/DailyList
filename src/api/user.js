import vueAxios from 'utils/axios';
import AV from 'leancloud-storage';

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

export function uploadAvatarImage(img) {
  let file = new AV.File(img.name, img);
  return file.save();
}

