<template>
  <div id="app">
    <wl-button type="success">按钮</wl-button>
    <wl-button type="primary">按钮</wl-button>
    <wl-form :model="model">
      <wl-form-item label="用户名" label-width="80">
        <wl-input placeholder="请输入用户名" v-model="model.username"></wl-input>
      </wl-form-item>
      <wl-form-item label="选择">
        <wl-switch placeholder="请输入用户名" label-width="80" v-model="model.active"></wl-switch>
      </wl-form-item>
    </wl-form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      model: {
        username: '',
        active: true
      }
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
