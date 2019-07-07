import Vue from 'vue'
import App from './App.vue'
//Vuex
import store from './store';
//Vue-router
import VueRouter from 'vue-router'
import routes from './routes'
// import BootstrapVue from 'bootstrap-vue'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'


// Vue.use(BootstrapVue);
Vue.config.productionTip = false;
//Vue-router设置
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    if (to.path === '/home') {
        sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (user === null && to.path !== '/home') {
        next({path: '/home'});
    } else {
        next();
    }
});

new Vue({
    render: h => h(App),
    router,
    store,
}).$mount('#app');
