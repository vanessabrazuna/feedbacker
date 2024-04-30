import '@/assets/css/style.css'
import '@/assets/css/fonts.css'
import 'animate.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
