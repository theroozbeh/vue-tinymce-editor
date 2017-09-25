// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

require('./assets/font-awesome.css');
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss');

Vue.config.productionTip = false

import tinymce from "../../src/components/TinymceVue"
//import tinymce from "vue-tinymce-editor"
Vue.component('tinymce', tinymce);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
