// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import common from '@/assets/js/common.js';
import store from './store';
import axios from './axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import md5 from 'js-md5'
import bus from new Vue();


Vue.config.productionTip = false
Vue.use(common);
Vue.use(store);
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.prototype.$md5 = md5; //加密

//过滤器注册
import * as filters from './filters/index'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data:function(){
    return{
      bus
    }
  }
})
