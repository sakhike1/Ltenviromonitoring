import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactUs from '../views/ContactUs.vue'
import PortfolioView from '../views/PortfolioView.vue'
import AboutUs from '../views/AboutUs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Service',
    name: 'ServiceView',
    component: ServiceView
  },
  {
    path: '/Contact',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/Portfolio',
    name: 'PorfolioView',
    component: PortfolioView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
