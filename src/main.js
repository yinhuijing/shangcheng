import Vue from 'vue'
import App from './App'

// 引入vuex
import Vuex from 'vuex';
Vue.use(Vuex);

//引入组件
import router from './router'

import qs from 'qs';
Vue.prototype.$qs = qs;

// 配置axios
import axios from 'axios'; // 引入axios
Vue.prototype.$axios = axios // 修改原型链

// base url
axios.defaults.timeout = 6000;
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://www.upperstu.com/api/';


// POST传参序列化 
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})

// 引入vant
import Vant, { Lazyload } from 'vant';
import 'vant/lib/index.css';
Vue.use(Lazyload);
Vue.use(Vant);

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {}
})

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    render: h => h(App)
})