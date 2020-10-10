const store = {
  namespaced: true,
  state: () => ({ open: false }),
  mutations: {
    openMenu(state) {
      state.open = true;
    },
    closeMenu(state) {
      state.open = false;
    },
  },
};
export default store;
