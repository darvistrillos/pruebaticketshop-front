import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/register.vue'
import Login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { 
      path: "/login", 
      component: Login 
    },
    { 
      path: "/register", 
      component: Register 
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/Productos.vue')
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: () => import('../views/Pedidos.vue')
    },
    {
      path: "/productos/:id",
      name: "detalle-producto",
      component: () => import("@/components/Detalleprod.vue")
    },
  ]
})

export default router
