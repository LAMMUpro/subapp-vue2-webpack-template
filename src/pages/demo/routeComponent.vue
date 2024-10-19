<template>
  <div>
    <section class="-m-card lightgoldenrodyellow">
      <h3 class="-m-title">在vue2中访问react18路由</h3>
      <span>ps：同时react18页面使用了派发组件</span>
    </section>
    <MicroApp
      _name="react18"
      _path="/react18/#/home"
    ></MicroApp>
    <MicroApp
      _name="react18"
      _path="/react18/#/demo/micromainComponent"
    ></MicroApp>
    <section class="-m-card lightgoldenrodyellow">
      <h3 class="-m-title">在vue2中访问vue3路由</h3>
      <span>ps：同时vue3页面使用了派发组件</span>
    </section>
    <MicroApp
      _name="vue3"
      _path="/vue3/#/home"
    ></MicroApp>
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
