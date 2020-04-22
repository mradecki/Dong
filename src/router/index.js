import Vue from 'vue';
import VueRouter from 'vue-router';
import Dong from '../components/Dong.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dong',
    name: 'Dong',
    component: Dong,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
