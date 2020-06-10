<template>
  <div class="wl-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wlCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>

</style>
