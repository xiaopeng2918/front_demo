import { createApp } from 'vue'
import Root from './Root.vue'
import router from './router'
import store from './store'
import './index.css'

createApp(Root).use(router).use(store).mount('#app')
