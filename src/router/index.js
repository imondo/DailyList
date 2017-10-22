import Vue from 'vue';
import Router from 'vue-router';

import layout from 'views/layout/layout';
import mineView from 'views/mineView/mine';

const loginView = reslove => require(['views/login/index'], reslove);
const indexView = reslove => require(['views/indexView/index'], reslove);
const detailsView = reslove => require(['views/indexView/details'], reslove);
const addView = reslove => require(['views/addView/index'], reslove);
// mine
const userView = reslove => require(['views/mineView/index'], reslove);
const infoView = reslove => require(['views/mineView/info'], reslove);
const editView = reslove => require(['views/mineView/edit'], reslove);
const aboutView = reslove => require(['views/mineView/about'], reslove);

Vue.use(Router);

Router.prototype.goBack = function () {
  this.isBack = true;
  window.history.go(-1)
};

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
      {path: '/details/:id', name: 'details', component: detailsView, meta: {title: '目标详情'}},
      {path: '/add', name: 'add', component: addView, meta: {title: '添加'}},
      {
        path: '/mine',
        name: 'mine',
        component: mineView,
        redirect: '/mine/index',
        children: [
          {path: 'index', name: 'user', component: userView, meta: {title: '我的'}},
          {path: 'info', name: 'info', component: infoView, meta: {title: '编辑', back: true}},
          {path: 'about', name: 'about', component: aboutView, meta: {title: '关于', back: true}},
          {path: 'edit/:id', name: 'edit', component: editView, meta: {back: true, editBtn: true}}
        ]
      }
    ]
  }
];

export default new Router({
  mode: 'hash',
  base: __dirname,
  routes: RouterMap,
  linkActiveClass: 'active'
});




