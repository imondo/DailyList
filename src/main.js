import Vue from 'vue'
import App from './App.vue'
import router from 'router/index'
import 'styles/index.less'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
