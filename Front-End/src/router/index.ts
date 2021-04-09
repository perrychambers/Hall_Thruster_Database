import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/Home.vue')
    }
  },
  {
    path: '/retrieve',
    name: 'retrieve system',
    component: function() {
      return import('../views/Retrieve.vue')
    }
  },
  {
    path: '/create',
    name: 'create admin',
    component: function () {
      return import('../views/CreateAdmin.vue')
    }
  },
  {
    path: '/edit',
    name: 'edit system',
    component: function () {
      return import('../views/Edit.vue')
    }
  },  
  {
    path: '/configure',
    name: 'configurations',
    component: function () {
      return import('../views/Configurations.vue')
    }
  },
  {
    path: '/compare',
    name: 'compare',
    component: function() {
      return import('../views/Compare.vue');
    }
  },
]

const router = new VueRouter({
  routes
})

export default router
