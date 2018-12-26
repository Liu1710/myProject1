// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import VueCookies from "vue-cookies"

Vue.use(VueCookies);
Vue.use(VueResource);
Vue.config.productionTip = false;

//引入样式类文件
import "./assets/js/jquery.js"
import "./assets/css/bootstrap.css"
import "./assets/js/bootstrap.js"
//引入jquery文件

import "./assets/css/animate.css"
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
