import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import CONSTS from '@/utils/CONSTS';
import { baseRoutes } from '@/router';
import { parseRoutesMetaParentComponent } from '@/router/helper';
import { isSubApp } from 'micro-app-utils';
import { generateDataListener } from 'micro-app-utils/listener';
import { MicroComponentSlotMap } from 'micro-app-utils/data';

Vue.use(VueRouter);

let app = undefined;
let router = undefined;

/** 监听微前端主应用数据, (data: BaseObj<any>) => void */
let dataListener;

/**
 * 微前端渲染钩子
 */
window.mount = () => {
  /** 每次mount需要重新构建路由 */
  router = new VueRouter({
    base: `/${CONSTS.PREFIX_URL}/`,
    routes: parseRoutesMetaParentComponent(baseRoutes),
  });

  app = new Vue({
    router,
    render: (h) => h(App),
  });

  /** 渲染节点获取方式 */
  const appRenderNode = window.document.body.querySelector('#app');

  /** $mount第二个参数要设置为true，否则挂载节点会被【替换】，导致切换应用会导致挂载id不存在！ */
  app.$mount(appRenderNode, true);

  dataListener = generateDataListener({
    micro_component: ({ slotName, elementId, props, parentElementId }) => {
      const elementDom = document.body.querySelector(`#${elementId}`);
      const slotVNode = MicroComponentSlotMap[parentElementId]?.[slotName];

      if (elementDom && slotVNode) {
        new Vue({
          render(h) {
            return h('div', slotVNode({ ...props }));
          },
        }).$mount(elementDom, true);
      }
    },
  });
  window.microApp?.addDataListener(dataListener, true);
};

/**
 * 微前端卸载钩子
 */
window.unmount = async () => {
  console.log('vue2卸载')
  app.$destroy();

  /**
   * 不清除innerHTML vue会报警告⚠
   * [Vue warn]: The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.
   */
  app.$el.innerHTML = '';
  app = undefined;
  router = undefined;

  window.microApp?.removeDataListener(dataListener);
}

/**
 * 应用独立运行时，直接运行渲染钩子函数
 */
if (!isSubApp) {
  window.mount();
}
