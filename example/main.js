import Vue from 'vue'
import App from './App.vue'
import '../docs/vueQuillEditor.css'
import QuillEditor from "../lib/vueQuillEditor.common";
Vue.config.productionTip = false
Vue.use(QuillEditor)
new Vue({
    render: h => h(App),
}).$mount('#app')
