import Vue from 'vue'
import App from './App.vue'
import QuillEditor from "../index";
Vue.config.productionTip = false
Vue.use(QuillEditor)
new Vue({
    render: h => h(App),
}).$mount('#app')
