import Vue from 'vue'
import App from './App.vue'
import router from './route/index.js'
import ElementUI from 'element-ui'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css'
import '../theme/index.css'
import JsonExcel from 'vue-json-excel'
import notice from '@/components/notice'
Vue.component('downloadExcel', JsonExcel)

// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

import asideComponent from '@/components/aside'
import mainComponent from '@/components/main'
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.component('aside-component', asideComponent)
Vue.component('main-component', mainComponent)

Vue.use(ElementUI)
Vue.use(notice)
Vue.config.productionTip = false
// 性能插件
Vue.config.performance = true

Vue.config.errorHandler = function (err) {
  alert(err)
}
// 路由全局钩子函数
router.beforeEach((to, from, next) => {
  console.log('before eached')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})