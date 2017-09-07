import Vue from 'vue';
import App from './App.vue';
import router from 'router/index';
import store from 'store/index';
import MuseUI from 'muse-ui';
import APP_CONFIG from './config';
import AV from 'leancloud-storage';
import 'muse-ui/dist/muse-ui.css';
import 'styles/index.less';
import { getToken } from 'utils/auth';
import { currentUser } from 'api/login';

AV.init({
  appId: APP_CONFIG.id,
  appKey: APP_CONFIG.key
});

Vue.use(MuseUI);

const whiteList = ['/login'];
router.beforeEach((to, form, next) => {
  if (getToken()) {
    if (!store.getters.userInfo) {
      currentUser().then((res) => {
        store.dispatch('GetUser', res.data).then(() => {
          next();
        });
      })
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login');
    }
  }
});

router.afterEach(() => {

});

Vue.prototype.$alert = function (state, message) {
  store.commit('SET_POPUPSTATE', state);
  store.commit('SET_POPUPMSG', message);
};

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
