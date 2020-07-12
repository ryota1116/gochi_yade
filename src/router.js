import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import French from './views/FrenchCuisine.vue'

// プラグインを使えるようにする
Vue.use(Router)
// プラグインをVue.jsにExport(適用)する
export default new Router({
  mode: 'history',
  // URLとコンポーネントをマッピングする
  routes: [
    // { path: '/', component: Home },
    // { path: '/french', component: French }
  ]
})