// this file gets compiles by browserify
// please import your partial files here
// your partials can be in any other folder than 'json', 'my-source' or 'single'
// these folders are used for other tasks
// you can change the name of this file in the config.json


import 'lazysizes';
import 'picturefill';
import svg4everybody from 'svg4everybody';
const Promise = require('es6-promise').polyfill();
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app/App.vue';
import content from './app/content.vue';
import singleGame from './app/components/game_single_view.vue';
import Impressum from './app/components/legal_notice.vue';
import * as filters from './filters';


svg4everybody();

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueRouter);

const routes = [
  { path: '/', component: content },
  { path: '/game/:id', component: singleGame, name: 'game' },
  { path: '/impressum', component: Impressum, name: 'impressum' },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
})

router.afterEach((to, from) => {
  ga('send', 'event', 'pageView', to.fullPath, 'view', 1);
});


/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

export default app;