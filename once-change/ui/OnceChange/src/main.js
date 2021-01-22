// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueI18n from 'vue-i18n'
import {post,get,patch,put} from './components/common/http'

// Vue.use(VueI18n,{
//   i18n: function (path, options) {
//     let value = i18n.t(path, options);
//     if (value !== null && value !== undefined) return value;
//     return '';
//   }
// });
Vue.use(ElementUI);
Vue.config.productionTip = false;

// const i18n = new VueI18n({ 
//   // 默认语言
//   locale: 'zh',
//   // 引入对应的语言包文件
//   messages: {   
//      'zh': require('@/assets/languages/zh.json'),   
//      'en': require('@/assets/languages/en.json') 
//    }
//  });
Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


