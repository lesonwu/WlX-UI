import Vue from 'vue'
import App from './App.vue'
import WlxUI from '../packages'
Vue.config.productionTip = false
Vue.use(WlxUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
