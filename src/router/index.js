import PageEmpty from '@/pages/empty.vue';
import Layout from '@/layouts/index.vue';

/** 基础路由 */
export const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import("@/pages/login.vue"),
    meta: { title: '登录页', parentComponent: Layout },
  },
  {
    /** 空白中转路由 */
    path: '/empty',
    name: 'empty',
    component: PageEmpty,
    meta: {},
  },
  {
    path: "/404",
    name: "page-404",
    component: () => import("@/pages/404.vue"),
    meta: { title: "不存在该页面", parentComponent: Layout },
  },
  {
    path: "/403",
    name: "page-401",
    component: () => import("@/pages/403.vue"),
    meta: { title: "暂无权限访问", parentComponent: Layout },
  },
];
