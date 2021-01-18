import Vue from 'vue'
import Router from 'vue-router'
import Demo from '@/views/demo.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: 'Demo',
      component: Demo
    },
  ]
});
