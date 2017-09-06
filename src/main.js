import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import MuseUI from 'muse-ui'
import APP_CONFIG from './config'
import AV from 'leancloud-storage'
import 'muse-ui/dist/muse-ui.css'
import 'styles/index.less'

AV.init({
  appId: APP_CONFIG.id,
  appKey: APP_CONFIG.key
});

Vue.use(MuseUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
