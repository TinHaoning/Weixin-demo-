// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './store'
import { Message } from "view-design";

import '@/assets/reset.css';
import 'view-design/dist/styles/iview.css';
import '@/assets/main.css';

Vue.prototype.$Message = Message;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store ,
  components: { App },
  template: '<App/>'
})
