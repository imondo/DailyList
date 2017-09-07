import Vue from 'vue';
import Vuex from 'vuex';
import states from './modules/states';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    states,
    user
  },
  getters
});

export default store;
