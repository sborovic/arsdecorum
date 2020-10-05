import firebase from 'firebase/app';

const actions = {
  signUpAction({ commit }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('setUser', response.user);
      })
      .catch((error) => {
        commit('setError', error.message);
      });
  },
  signInAction({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then((response) => {
        commit('setUser', response.user);
      })
      .catch((error) => {
        commit('setError', error.message);
      });
  },
};

export default actions;
