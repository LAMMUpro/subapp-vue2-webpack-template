import Layout from '@/layouts/index.vue';
import MicroComponent from 'micro-app-utils/vue2/MicroComponent.vue';

/**
 * demo路由
 */
const demoRoutes = [
  {
    path: `/demo/micromainComponent`,
    name: `micromainComponent`,
    component: () => import('@/pages/demo/micromainComponent.vue'),
    meta: {},
  },
  {
    path: `/demo/routeComponent`,
    name: `routeComponent`,
    component: () => import('@/pages/demo/routeComponent.vue'),
    meta: {},
  },
  {
    path: `/home`,
    name: `home`,
    component: () => import('@/pages/home.vue'),
    meta: {},
  },
];

/** 基础路由 */
export const baseRoutes = [
  {
    path: '/empty',
    name: 'PageEmpty',
    component: {
      render(createElement) {
        return createElement(MicroComponent, {
          props: {
            _is: 'PageEmpty',
          },
        });
      },
    },
    meta: {},
  },
  {
    path: '/404',
    name: 'Page404',
    component: {
      render(createElement) {
        return createElement(MicroComponent, {
          props: {
            _is: 'Page404',
          },
        });
      },
    },
    meta: { title: '不存在该页面', parentComponent: Layout },
  },
  {
    path: '/403',
    name: 'Page403',
    component: {
      render(createElement) {
        return createElement(MicroComponent, {
          props: {
            _is: 'Page403',
          },
        });
      },
    },
    meta: { title: '暂无权限访问', parentComponent: Layout },
  },
  ...demoRoutes,
];
