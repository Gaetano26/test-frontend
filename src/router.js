import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ProductList from './pages/ProductList.vue'
import Chart from './pages/Chart.vue'

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
  ]
})

export default router
