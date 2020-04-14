import Vue from 'vue'

import 'normalize.css/normalize.css' // 提供了跨浏览器的高度一致性 A modern alternative to CSS resets https://blog.csdn.net/WuLex/article/details/100778370

import ElementUI from 'element-ui' // 饿了吗ui 组件 https://element.eleme.cn/#/
import 'element-ui/lib/theme-chalk/index.css' //  饿了吗ui 样式
import locale from 'element-ui/lib/locale/lang/en' // lang i18n 国际化

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router' //路由

import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
