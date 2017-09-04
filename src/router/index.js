import Vue from 'vue';
import Router from 'vue-router';

import layout from 'views/layout/layout';

const indexView = reslove => require(['views/indexView/index'], reslove);

Vue.use(Router);

export const RouterMap = [
  {
    path: '/',
    component: layout,
    children: [
      {path: '/index', name: 'index', component: indexView}
    ]
  }
];

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: RouterMap,
  linkActiveClass: 'active'
});




