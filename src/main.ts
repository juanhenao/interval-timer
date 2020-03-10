import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import App from './App.vue'
import './registerServiceWorker'
import './styles/main.scss'


import router from './routes';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
