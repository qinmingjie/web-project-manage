import { createRouter, createWebHashHistory } from 'vue-router'

const LoginPages = () => import('../pages/login/Login.vue')
const Layout = () => import('../layout/Layout.vue')

const defaultRouter = [
  {
    path: '/',
    component: Layout
  },
  {
    path: '/login',
    component: LoginPages
  }
]

const router = createRouter({
  routes: defaultRouter,
  history: createWebHashHistory()
})

export default router
