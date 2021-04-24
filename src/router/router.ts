import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';




Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
