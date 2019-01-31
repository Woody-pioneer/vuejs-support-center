import 'babel-polyfill'
import Vue from 'vue'
import AppLayout from './components/AppLayout'
import router from './router'
import './global-components'
import state from './state'
import VueState from './plugins/state'
import VueFetch from './plugins/fetch'
Vue.use(VueState,state);
Vue.use(VueFetch,{
  baseUrl: 'http://guestbook.oo/api/',
});
new Vue({
  el: '#app',
  render: h => h(AppLayout),
  router,
  data:state,
});
