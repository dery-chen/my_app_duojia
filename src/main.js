import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style.css"
import Vant from 'vant';
import 'vant/lib/index.css';
import "../src/font/iconfont.js"
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



