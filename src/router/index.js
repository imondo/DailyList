import Vue from 'vue';
import Router from 'vue-router';

import layout from 'views/layout/layout';

const loginView = reslove => require(['views/login/index'], reslove);
const indexView = reslove => require(['views/indexView/index'], reslove);
const everyDayView = reslove => require(['views/everyDayView/index'], reslove);
const mineView = reslove => require(['views/mineView/index'], reslove);

Vue.use(Router);

export const RouterMap = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: loginView
  },
  {
    path: '/',
    component: layout,
    children: [
      {path: '/index', name: 'index', component: indexView, meta: {title: '今天'}},
      {path: '/everyDay', name: 'everyDay', component: everyDayView, meta: {title: '每天'}},
      {path: '/user', name: 'user', component: mineView, meta: {title: '我的'}}
    ]
  }
];

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: RouterMap,
  linkActiveClass: 'active'
});




