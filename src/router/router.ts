import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';
import Creator from '../views/ArticleCreate.vue';
import Editor from '../views/ArticleEdit.vue';
import Article from '../views/Article.vue';





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
    name: 'editor_new',
    component: Creator,
  },
  {
    path: '/editor/:article-slug',
    name: 'editor_edit',
    component: Editor,
  },
  {
    path: '/article/:article-slug',
    name: 'article',
    component: Article,
  },
  {
    path: '/:username',
    name: 'profile',
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
