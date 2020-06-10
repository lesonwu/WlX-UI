<template>
  <div class="wl-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wlRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // wl-radio-group接收到了 value值
    // 将来还需要触发 当前组件的input事件
    // provide 与  inject  provider/consumer
    value: null
  }
}
</script>

<style>

</style>
