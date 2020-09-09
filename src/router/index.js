import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    children: [
      {
        path: '', // Default component
        component: () => import(/* webpackChunkName: "admin_overview" */ '../components/AdminOverview.vue'),
      },
      {
        path: 'overview',
        name: 'AdminOverview',
        component: () => import(/* webpackChunkName: "admin_overview" */ '../components/AdminOverview.vue'),
      },
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import(/* webpackChunkName: "admin_products" */ '../components/AdminProducts.vue'),
      },
      {
        path: 'orders',
        name: 'AdminOrders',
        component: () => import(/* webpackChunkName: "admin_orders" */ '../components/AdminOrders.vue'),
      },
    ],
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminContainer.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
