import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import store from './store/index'
import './plugins/element.js'
import './style/public.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
