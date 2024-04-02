import { createRouter, createWebHistory } from 'vue-router'

const LoginPages = () => import('../pages/login/Login.vue')
const Layout = () => import('../layout/Layout.vue')

const defaultRouter = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: { requireAuth: true }
  },
  {
    path: '/login',
    component: LoginPages
  }
]

const router = createRouter({
  routes: defaultRouter,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next('/login')
  } else {
    next()
  }
})

export default router
