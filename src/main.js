import "@babel/polyfill";
import "mutationobserver-shim";
import "es6-promise/auto";
// Bootstrap
import "./plugins/bootstrap-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// Router
import VueRouter from "vue-router";
import routes from "./routes";
Vue.use(VueRouter);
const router = new VueRouter({ routes });
// Vuex
import Vuex from "vuex";
import store from "./components/TodoStore";
Vue.use(Vuex);
// Axios
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Vue
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
