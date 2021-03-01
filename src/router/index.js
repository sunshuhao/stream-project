import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // pc端
  {
    path: '/',
    name: 'pc/home',
    component: ()=>import("@/views/pc/home"),
  },
  // 手机端
  {
    path: '/mobile/home',
    name: 'mobile/home',
    component: ()=>import("@/views/mobile/home"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
