import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';
import Editor from '../views/Editor.vue';





Vue.use(Router);

export default new Router({
  routes: [
  {
    path: '/',
    name: 'h ome',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },
  {
    path: '/editor',
    name: 'editor',
    component: Editor,
  },
  {
    path: '/@:username',
    name: 'profile',
    component: Profile,
  },
],
});
