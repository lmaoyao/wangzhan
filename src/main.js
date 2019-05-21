import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
Vue.config.productionTip = false
/* import Swiper from "swiper"
Vue.use(Swiper); */

import "../node_modules/swiper/dist/css/swiper.css"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
