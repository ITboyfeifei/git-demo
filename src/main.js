import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import "./element/element.js";
import "./assets/gelobal.css";




axios.defaults.baseURL = 'http://www.liulongbin.top:3005/';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
