import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'App',
      component: () => import('@/App.vue')
    },
    {
      path: '/newpage',
      name: 'NewPage',
      component: () => import('@/components/NewPage.vue'),
      meta: { title: '新页面' }
    },
    {
      path: '/routeobj',
      name: 'RouterObj',
      component: () => import('@/components/RouterObj.vue')
    },
    {
      path: '/usestore',
      name: 'UseStore',
      component: () => import('@/components/UseStore.vue')
    }
  ]
})

export default router
