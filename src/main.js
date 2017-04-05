import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import vueResource  from 'vue-resource';
import store from 'store/index.js';
Vue.use(vueResource);

import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题

Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
