import Vue from 'vue';
import App from './App.vue';
import router from 'router/index';
import store from 'store/index';
import APP_CONFIG from './config';
import AV from 'leancloud-storage';
// import 'muse-components/styles/base.less'
// import textField from 'muse-components/textField'
// import Popup from 'muse-components/Popup'
// import raisedButton from 'muse-components/raisedButton'
// import Paper from 'muse-components/Paper'
// import circularProgress from 'muse-components/circularProgress'
// import * as bottomNav from 'muse-components/bottomNav'
// import icon from 'muse-components/icon'
// import * as list from 'muse-components/list'
// import avatar from 'muse-components/avatar'
// import floatButton from 'muse-components/floatButton'
// import datePicker from 'muse-components/datePicker'

import MuseUI from 'muse-ui';
import '../static/fonts/material-icons.css';
import 'muse-ui/dist/muse-ui.css';
import touch from 'vue-directive-touch';
import '../static/icon/iconfont.css';
import 'styles/index.less';
import { getToken } from 'utils/auth';
import { currentUser } from 'api/login';

AV.init({
  appId: APP_CONFIG.id,
  appKey: APP_CONFIG.key
});

Vue.use(MuseUI);
Vue.use(touch);

// const components = [
//   textField,
//   Popup,
//   raisedButton,
//   Paper,
//   circularProgress,
//   bottomNav,
//   icon,
//   list,
//   avatar,
//   floatButton,
//   // datePicker
// ];
// components.forEach((item) => {
//   if (!item.name) {
//     Object.keys(item).forEach((key) => {
//       Vue.component(item[key].name, item[key]);
//     });
//   } else {
//     Vue.component(item.name, item);
//   }
// });

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
