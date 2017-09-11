import vueAxios from 'utils/axios';

export function addList(data) {
  return vueAxios({
    url: 'classes/List',
    method: 'POST',
    data: data
  });
}

export function deleteList(id) {
  return vueAxios({
    url: 'classes/List/' + id,
    method: 'DELETE'
  });
}

export function updateList(data, id) {
  return vueAxios({
    url: 'classes/List/' + id,
    method: 'PUT',
    data: data
  });
}

export function getList(data) {
  return vueAxios({
    url: 'classes/List',
    method: 'GET',
    params: data
  });
}