import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import modal from './modal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authentication,
    modal,
  },
});
