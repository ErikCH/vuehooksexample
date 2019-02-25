import Vue from 'vue'
import { hooks } from 'vue-hooks';
import App from './App'

Vue.use(hooks)

new Vue({
  el: '#app',
  render: h => h(App)
})