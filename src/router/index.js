import Vue from 'vue';
import Router from 'vue-router';

import layout from 'views/layout/layout';
import mineView from 'views/mineView/mine';

const loginView = reslove => require(['views/login/index'], reslove);
const indexView = reslove => require(['views/indexView/index'], reslove);
const everyDayView = reslove => require(['views/everyDayView/index'], reslove);
// mine
// const mineView = reslove => require(['views/mineView/mine'], reslove);
const userView = reslove => require(['views/mineView/index'], reslove);
const infoView = reslove => require(['views/mineView/info'], reslove);

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
      {
        path: '/mine',
        name: 'mine',
        component: mineView,
        redirect: '/mine/index',
        children: [
          {path: 'index', name: 'user', component: userView, meta: {title: '我的'}},
          {path: 'info', name: 'info', component: infoView, meta: {title: '个人信息', back: true}}
        ]
      }
    ]
  }
];

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: RouterMap,
  linkActiveClass: 'active'
});




