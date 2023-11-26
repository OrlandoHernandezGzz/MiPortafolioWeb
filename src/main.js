import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBarsStaggered)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
