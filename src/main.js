import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from './firebase';
import '@storefront-ui/vue/styles.scss';

Vue.config.productionTip = false;

// Global app properties
Vue.prototype.$shopName = 'bArs Decorum';
Vue.mixin({
  created() {
    console.log(`[created] ${this.$options.name}`);
  },
});

/* Ensures Firebase initializes
before loading the app
when a user refreshes a page */

let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
