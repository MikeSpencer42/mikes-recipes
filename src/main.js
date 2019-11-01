import Vue from 'vue'
import Buefy from 'buefy'
Vue.use(Buefy)

import App from './App.vue'

// Styles
import './assets/css/fontawesome.all.min.css'
import './sass/app.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
