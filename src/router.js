import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProductList from './pages/ProductList.vue'
import Chart from './pages/Chart.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
  },
  {
    path: '/chart',
    name: 'chart',
    component: Chart
},
{
  path: '/register',
  name: 'register',
  component: Register
},
{
  path: '/login',
  name: 'login',
  component: Login
},
  ]
})

export default router
