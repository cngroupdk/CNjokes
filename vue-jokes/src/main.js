import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import PortalVue from "portal-vue";
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.use(PortalVue);
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({routes});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
