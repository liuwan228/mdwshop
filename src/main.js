import Vue from 'vue'
import App from './App'
import store from './store/index';

import Empty from '@/components/common/Empty.vue'
import CustomBar from '@/components/common/CustomBar.vue'
import scrollList from '@/components/common/scrollList.vue'
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

Vue.component('empty',Empty)
Vue.component('custom-bar',CustomBar)
Vue.component('scrollList',scrollList)



App.mpType = 'app'

function isPromise(obj) {
  return (
    !!obj &&
    (typeof obj === "object" || typeof obj === "function") &&
    typeof obj.then === "function"
  );
}

uni.addInterceptor({
  returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  },
});

const app = new Vue({
  ...App,
  store
})
app.$mount()
