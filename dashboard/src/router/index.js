import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: '/feedbacks',
      name: 'Feedbacks',
      meta: { hasAuth: true },
      component: () => import('@/views/Feedbacks/index.vue')
    },
    {
      path: '/credencials',
      name: 'Credencials',
      meta: { hasAuth: true },
      component: () => import('@/views/Credencials/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' },
    },
  ]
})

export default router
