// Vue.js Devtools
Vue.config.devtools = true;

import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
// import './plugins/firebase';

Vue.config.productionTip = false

// このファイルでVueインスタンスが作成される
// index.htmlのid="app"にAppという名前のコンポーネント(元は./App.vue)をマウントしている
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
