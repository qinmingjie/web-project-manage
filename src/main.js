import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store/index'

import router from './router/index'
import '@/assets/css/reset.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
