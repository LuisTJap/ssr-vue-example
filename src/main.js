import Vue from 'vue'
import App from './App.vue'
import Rating from 'v-rating';


new Vue({
  el: '#app',
  render: h => h(App)
})
Vue.component('Rating', require('v-rating'));
