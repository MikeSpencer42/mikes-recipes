import Vue from 'vue'

// Styles
import './assets/css/fontawesome.solid.min.css'
import './assets/css/fontawesome.min.css'
import './sass/app.scss'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
