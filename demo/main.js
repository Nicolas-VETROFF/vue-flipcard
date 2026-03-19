import { createApp } from 'vue'
import App from './App.vue'
import VFlipCard from '@nv-dev/vue-flipcard'

const app = createApp(App)
app.use(VFlipCard)
app.mount('#app')
