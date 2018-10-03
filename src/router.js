import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import('@/views/Testing.vue'),
    },
    {
      path: '/icons',
      name: 'icons',
      component: () => import('@/views/Icons.vue'),
    },
    {
      path: '/bootstrap',
      name: 'bootstrap',
      component: () => import('@/views/Boostrap.vue'),
    },
  ],
});
