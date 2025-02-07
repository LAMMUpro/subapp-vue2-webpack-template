<template>
  <div class="">
    <section class="-m-card">
      <h2 class="-m-title">vue2使用fl-paging-select</h2>
      <fl-paging-select-v2
        :value.sync="info.id"
        :label.sync="info.name"
        :api="api"
        :optionSetting="{ label: 'name', id: 'id' }"
        style="width: 300px"
      >
      </fl-paging-select-v2>
      <div class="mt-3">{{ info }}</div>
    </section>

    <section class="-m-card">
      <h2 class="-m-title">vue2使用fl-qr-code</h2>
      <fl-qr-code-v2
        text="https://micro-admin-template.lammu.cn/micromain/demo/frame-less-ui"
      ></fl-qr-code-v2>
    </section>

    <section class="-m-card">
      <h2 class="-m-title">vue2使用fl-button</h2>
      <fl-button-v2 type="primary">普通按钮</fl-button-v2>
      <fl-button-v2
        class="ml-1"
        type="success"
        >成功按钮</fl-button-v2
      >
      <fl-button-v2
        class="ml-1"
        type="warning"
        >警告按钮</fl-button-v2
      >
      <fl-button-v2
        class="ml-1"
        type="danger"
        >危险按钮</fl-button-v2
      >
    </section>
  </div>
</template>

<script>
import FlButtonV2 from 'frame-less-ui/vue2/button';
import FlPagingSelectV2 from 'frame-less-ui/vue2/paging-select';
import FlQrCodeV2 from 'frame-less-ui/vue2/qr-code';

export default {
  components: {
    FlButtonV2,
    FlPagingSelectV2,
    FlQrCodeV2,
  },
  data() {
    return {
      info: {
        id: '4',
        name: '上海华耀公司有限公司',
      },
    }
  },
  methods: {
    api() {
      function generateId() {
        return 1 + Date.now().toString().slice(5) + Math.random().toString(36).substring(2);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              pageSize: 10,
              currentPage: 1,
              totalCount: 100,
              list: [
                {
                  id: generateId(),
                  name: '上海外服（集团）有限公司国际人才分公司超长溢出测试',
                },
                { id: generateId(), name: '上海电气集团股份有限公司' },
                { id: generateId(), name: '上海外服（集团）有限公司' },
                { id: generateId(), name: '上海华耀公司有限公司' },
                { id: generateId(), name: '上海北泰实业股份有限公司' },
                { id: generateId(), name: '上海国际集团有限公司' },
                { id: generateId(), name: '上海明国实业有限公司' },
                { id: generateId(), name: '上海曼珩鼎实业有限公司' },
                { id: generateId(), name: '上海闻岱商业管理有限公司' },
                { id: generateId(), name: '上海叁零财务管理咨询有限公司' },
              ],
            },
            success: true,
          });
        }, 2000);
      });
    },
  },
  mounted() {
    console.log('ssss', this)
  }
}

</script>

<style lang="scss" scoped></style>
