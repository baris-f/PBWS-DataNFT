import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import Landing from "./components/Landing.vue";
import Sell from "./components/Sell.vue";
import DataList from "./components/DataList.vue";
import Notfound from "./components/404.vue";
import {createRouter, createWebHistory} from "vue-router";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: "Landing", component: Landing },
        { path: '/sell', name: "Sell", component: Sell },
        { path: '/marketplace', name: "DataList", component: DataList },
        { path: '/:catchAll(.*)', name: "Notfound", component: Notfound }
    ]
// shorthand routes:routes
});

createApp(App).use(router).mount('#app')
