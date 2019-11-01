import Vue from 'vue'
import Buefy from 'buefy'
Vue.use(Buefy)

// Styles
import './assets/css/fontawesome.all.min.css'
import './sass/app.scss'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
