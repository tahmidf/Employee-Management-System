/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


import VueRouter from 'vue-router'

Vue.use(VueRouter)

import dashboard from './components/Dashboard.vue'
import profile from './components/Profile.vue'
import users from './components/Users.vue'

let routes = [
    { path: '/dashboard', component: dashboard },
    { path: '/profile', component: profile },
    { path: '/users', component: users }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
