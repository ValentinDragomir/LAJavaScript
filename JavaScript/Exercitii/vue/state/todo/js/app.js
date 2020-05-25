import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'
import 'https://cdn.jsdelivr.net/npm/vuex/dist/vuex.js'
import './component/todolist.js'
import './component/task.js'
import store from './store/store.js'

var app = new Vue({
    el: '#app',
    store
});