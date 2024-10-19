<template>
  <div>
    <section
      class="-m-card"
      style="text-align: center"
    >
      <MicroComponent
        class="animation"
        _is="UseSvg"
        name="vue"
        size="400px"
      ></MicroComponent>

      <div>vue2子应用首页</div>
    </section>
  </div>
</template>

<script>
import MicroComponent from 'micro-app-tools/vue2/MicroComponent.vue';

export default {
  components: {
    MicroComponent,
  },
};
</script>

<style scoped>
@keyframes App-logo-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}
.animation {
  display: inline-block;
  animation: App-logo-spin 20s linear infinite;
}
</style>
