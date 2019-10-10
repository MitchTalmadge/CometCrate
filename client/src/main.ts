import Vue from 'vue';
import App from './App.vue';
import router from './router';
import initFontAwesome from './vendor/font-awesome';

Vue.config.productionTip = false;

// Vendors
initFontAwesome();

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
