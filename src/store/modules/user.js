import Cookies from 'js-cookie';
import { loginOut, currentUser } from 'api/login';
import { updateUser, updatePassword } from 'api/user';
import { setToken, getToken, removeToken } from 'utils/auth';

const user = {
  state: {
    token: Cookies.get('TOKEN'),
    info: null,
    username: null,
    sex: null,
    signature: '一切，源于习惯。',
    password: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, info) => {
      state.info = info;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_USERSEX: (state, sex) => {
      state.sex = sex;
    },
    SET_USERSIGN: (state, signature) => {
      state.signature = signature;
    },
    SET_USERPSD: (state, password) => {
      state.password = password;
    }
  },
  actions: {
    // 设置token
    SetToken ({ commit }, token) {
      return new Promise((reslove, reject) => {
        setToken(token); //登录成功后将token存储在cookie中
        commit('SET_TOKEN', token);
        reslove();
      });
    },

    // 获取用户信息
    GetUser ({ commit, state }, user) {
      return new Promise((resolve, reject) => {
        commit('SET_USER', user);
        resolve();
      });
    },

    // 更新用户信息
    UpdateUser ({commit, state}, user) {
      return new Promise((resolve, reject) => {
        updateUser(state.info.objectId, user).then((res) => {
          if (res.status === 200) {
            currentUser().then((res) => {
              commit('SET_USER', res.data);
            })
          }
        });
        resolve();
      });
    },

    // 更新用户密码
    UpdatePassword ({commit, state}, password) {
      return new Promise((resolve, reject) => {
        updatePassword(state.info.objectId, password).then((res) => {
          if (res.status === 200) {

          }
        });
        resolve();
      });
    },

    // 登出系统
    LoginOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        loginOut().then(() => {
          commit('SET_TOKEN', {});
          commit('SET_USER', {});
          removeToken();
          resolve();
        }).catch(error => {
          reject(error);
        })
      });
    },

    // 前端登出系统
    FeLoginOut({commit, state}) {
      return new Promise( resolve => {
        commit('SET_TOKEN', {});
        commit('SET_USER', {});
        resolve();
      })
    }
  }
};

export default user;
