import Vue from 'vue';
import CoreuiVue from '@coreui/vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@coreui/coreui/scss/coreui.scss';
import '@storefront-ui/vue/styles.scss';

Vue.config.productionTip = false;
Vue.use(CoreuiVue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
