import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const initialState = () => ({ user: null, error: null });

export default new Vuex.Store({
  state: initialState(),
  mutations,
  actions,
  modules: {
  },
});
