import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
    modalVisible: false,
  },
  mutations: {
    showModal(state) {
      state.modalVisible = true;
    },
    hideModal(state) {
      state.modalVisible = false;
    },
  },
};
export default store;
