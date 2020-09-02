import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
import axios from "axios";
import VueAxios from "vue-axios";
import routes from "./routes";
import "es6-promise/auto";
import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./components/TodoStore";

Vue.use(Vuex);

Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

const router = new VueRouter({ routes });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
