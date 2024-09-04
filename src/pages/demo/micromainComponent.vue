<template>
  <div class="micromainComponent">
    <section class="-m-card lightblue">
      <span class="-m-title">SvgIcon图标</span>
      <MicroComponent
        class="a1"
        _is="SvgIcon"
        style="margin-right: 6px"
        name="Github"
      ></MicroComponent>
      <MicroComponent
        class="a1"
        _is="SvgIcon"
        style="margin-right: 6px"
        name="arrow-bottom"
      ></MicroComponent>
      <MicroComponent
        class="a1"
        _is="SvgIcon"
        style="margin-right: 6px"
        name="docs-question"
      ></MicroComponent>
      <MicroComponent
        class="a1"
        _is="SvgIcon"
        style="margin-right: 6px"
        name="zhanwei"
      ></MicroComponent>
    </section>

    <section class="-m-card lightcoral">
      <span class="-m-title">Dialog弹窗</span>
      <button
        class="btn"
        @click="open()"
      >
        打开弹窗: {{ formInfo.number }}
      </button>
      <MicroComponent
        _is="BaseDialog"
        :modelValue="show"
        @update:modelValue="val => show = val"
        title="主应用的弹窗"
      >
        <template #default>
          <div>
            <div>默认插槽：{{ formInfo.number }}</div>
            <button
              class="btn"
              style="background-color: lightskyblue"
              @click="add()"
            >
              点击计数器加1
            </button>
          </div>
        </template>
        <template #footer>
          <button
            class="btn"
            @click="cancel()"
          >
            确定
          </button>
          <button
            class="btn"
            style="margin-left: 10px; background-color: rgb(241, 241, 241); color: gray"
            @click="cancel()"
          >
            关闭
          </button>
        </template>
      </MicroComponent>
    </section>
  </div>
</template>
<script>
import MicroComponent from 'micro-app-utils/vue2/MicroComponent.vue';

export default {
  components: {
    MicroComponent,
  },
  data() {
    return {
      show: false,
      formInfo: {
        number: 1,
      },
    };
  },
  mounted() {},
  methods: {
    add() {
      this.formInfo.number += 1;
    },
    open() {
      this.show = true;
    },
    cancel() {
      this.show = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.micromainComponent {
  .btn {
    background-color: rgb(35, 48, 224);
    padding: 6px 10px;
    border-radius: 4px;
    font-size: 14px;
    color: white;
  }
}
</style>
