import Vue from 'vue';
import VueRouter from 'vue-router';

import example from './components/example';
import { store } from "./store/store";

/* for vue route 
    Vue.use(VueRouter);

    const message = { message: "Hello" };

    const routes = [
        { path: '/example', component: example ,props: message },
        { path: '/example', component: example },
        { path: '/example/:id',   name: 'example', component: example }
    ]

    const router = new VueRouter({
        mode: 'history',
        routes 
    })
*/

/*
* add router to app if you want to VueRouter
*/

let app = new Vue({
  el: '#app',
  store : store,
  components : {
    example
  }
})