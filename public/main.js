import Vue from 'vue';
import VueRouter from 'vue-router';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import example from './components/example';
import { store } from "./store/store";


Vue.use(Buefy);

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