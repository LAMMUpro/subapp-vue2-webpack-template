import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import CONSTS from '@/utils/CONSTS';
import { baseRoutes } from '@/router';
import { parseRoutesMetaParentComponent } from '@/router/helper';
import { isSubApp, sendDataDown, sendDataUp, MicroAppInit } from 'micro-app-utils';
import { generateDataListener } from 'micro-app-utils/listener';
import { MicroComponentSlotMap } from 'micro-app-utils/data';
import microApp from '@micro-zoe/micro-app';

Vue.use(VueRouter);

window._subAppSettingList_ = window.rawWindow?._subAppSettingList_ || [];

/** 初始化微前端配置 */
MicroAppInit({
  env: process.env.NODE_ENV === 'development' ? 'localhost' : 'master',
  tagName: CONSTS.microAppTagName,
  dataListener: generateDataListener({
    /** 子应用接收到这个请求需要往上传递，直到传给顶部主应用 */
    micro_component_request: (data) => {
      sendDataUp({
        emitName: 'micro_component_request',
        parameters: [{
          ...data,
          subAppNameList: [...data.subAppNameList, window.__MICRO_APP_NAME__]
        }],
      });
    },
  }),
  subAppSettingList: window._subAppSettingList_,
});

/** 启动微前端 */
microApp.start({
  tagName: CONSTS.microAppTagName,
  /** 防止子应用请求父应用资源（部署时需要配置这个url指向这个文件） */
  iframeSrc: `/micromain/empty.html`,
  'keep-router-state': true,
});

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
  const appRenderNode = window.document.body.querySelector('#__subapp_vue2');

  /** $mount第二个参数要设置为true，否则挂载节点会被【替换】，导致切换应用会导致挂载id不存在！ */
  app.$mount(appRenderNode, true);

  dataListener = generateDataListener({
    micro_component_slot: ({ subAppNameList, slotName, elementId, props, parentElementId }) => {
      /**
       * 当前子应用即为目标子应用
       */
      if (subAppNameList.length === 0) {
        const elementDom = document.body.querySelector(`#${elementId}`);
        const slotVNode = MicroComponentSlotMap[parentElementId]?.[slotName];

        if (elementDom && slotVNode) {
          new Vue({
            render(h) {
              return h('div', slotVNode({ ...props }));
            },
          }).$mount(elementDom, true);
        }
      } else {
        /**
         * 往下继续传递事件
         */
        const nextSubAppName = subAppNameList.slice(-1)[0];
        sendDataDown(nextSubAppName, {
          emitName: 'micro_component_slot',
          parameters: [
            {
              slotName, elementId, props, parentElementId,
              subAppNameList: subAppNameList.slice(0, -1),
            }
          ],
        })
      }
    },
  });
  window.microApp?.addDataListener(dataListener, true);
};

/**
 * 微前端卸载钩子
 */
window.unmount = async () => {
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
