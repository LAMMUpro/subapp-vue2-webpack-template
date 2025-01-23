<template>
  <div>
    <div style="margin-bottom: 10px;">
      <section class="-m-card lightgray">
        <h3 class="-m-title">在vue2中访问react18首页</h3>
      </section>
      <section style="margin-left: 16px;">
        <MicroApp
          _name="react18"
          _path="/react18/#/home"
        ></MicroApp>
      </section>
    </div>
    
    <div style="margin-bottom: 10px;">
      <section class="-m-card lightgray">
        <h3 class="-m-title">在vue2中访问react18路由</h3>
        <span>ps：同时react页面使用了派发组件</span>
      </section>
      <section style="margin-left: 16px;">
        <MicroApp
          _name="react18"
          _path="/react18/#/demo/micromainComponent"
        ></MicroApp>
      </section>
    </div>

    <div style="margin-bottom: 10px;">
      <section class="-m-card lightgray">
        <h3 class="-m-title">在vue2中访问vue3首页</h3>
      </section>
      <section style="margin-left: 16px;">
        <MicroApp
          _name="vue3"
          _path="/vue3/#/home"
        ></MicroApp>
      </section>
    </div>
    
    <div style="margin-bottom: 10px;">
      <section class="-m-card lightgray">
        <h3 class="-m-title">在vue2中访问vue3路由</h3>
        <span>ps：同时vue2页面使用了派发组件</span>
      </section>
      <section style="margin-left: 16px;">
        <MicroApp
          _name="vue3"
          _path="/vue3/#/demo/micromainComponent"
        ></MicroApp>
      </section>
    </div>
  </div>
</template>

<script>
import MicroApp from 'micro-app-tools/vue2/MicroApp.vue';

export default {
  components: {
    MicroApp,
  },
}
</script>

<style scoped>
/** */
</style>
