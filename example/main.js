import Vue from 'vue'
import App from './App.vue'
import QuillEditor from "../src";
Vue.config.productionTip = false
Vue.use(QuillEditor)
new Vue({
    render: h => h(App),
}).$mount('#app')
