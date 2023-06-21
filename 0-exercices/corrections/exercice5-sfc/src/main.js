import { createApp } from 'vue' // createApp permet de créer une instance de Vue et ensuite grâce à sa méthode mount d'injecter les templates dans un élement de notre DOM qui a l'id #app
import App from './App.vue' // composant root
import router from './router'
import './assets/css/main.css'
import store from '@/store'

const app = createApp(App)
app.use(router) // Ajout du router
app.use(store) // Ajout du store

app.mount('#app') // Injection dans le DOM dans l'élément qui a l'ID #app