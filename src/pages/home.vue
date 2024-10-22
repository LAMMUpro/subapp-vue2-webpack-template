<template>
  <div>
    <section
      class="-m-card"
      style="text-align: center"
    >
      <MicroComponent
        _is="Lottie"
        :width="600"
        :height="600"
        :animation-link="getLottieJsonLink('front')"
      ></MicroComponent>

      <div>vue2子应用首页</div>
    </section>
  </div>
</template>

<script>
import MicroComponent from 'micro-app-tools/vue2/MicroComponent.vue';
import { getLottieJsonLink } from '@/utils';

export default {
  components: {
    MicroComponent,
  },
  methods: {
    getLottieJsonLink,
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
