import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Page from './components/Page.vue';
import page3 from './components/Page3.vue';
import page4 from './components/page4.vue';
import page5 from './components/page5.vue';
import page6 from './components/page6.vue';
import win from './components/win.vue';
import loose from './components/loose.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
    },
    
    {
      path: '/page3',
      name: 'page3',
      component: page3,
    },
    
    {
      path: '/page4',
      name: 'page4',
      component: page4,
    },

    {
      path: '/page5',
      name: 'page5',
      component: page5,
    },

    {
      path: '/page6',
      name: 'page6',
      component: page6,
    },

    {
      path: '/win',
      name: 'win',
      component: win,
    },

    {
      path: '/loose',
      name: 'loose',
      component: loose,
    },

    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
