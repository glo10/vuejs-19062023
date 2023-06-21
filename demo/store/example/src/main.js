import './assets/main.css'
import { createStore} from 'vuex' // En 1
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
// création du store
const store = createStore({
 // state : les données
 // mutations : le seul endroit ou vous êtes autorisé à modifier les données
 // actions : les composants lorsqu'ils veulent modifier le state, ils vont utiliser les actions pour notifier aux mutations
 // getters : comme computed c'est des données du state qu'on transforment et qui seront recuperables dans nos composants
 state: {
    users: [],
 },
 mutations: {
    create(state, newUser) {
        state.users.push(newUser)
    },
    delete(state, oldUser) {
        state.users = state.users.filter(user => user.id != oldUser.id)
    }
 },
 actions: {
    create({commit}, newUser){
        // logique plus complexe ici
        commit('create', newUser) // on doit obligatoire faire un commit sinon la mutation ne pourra pas avoir lieu depuis le store
    },
    delete({commit}, oldUser){
        commit('delete', oldUser)
    }
 },
 getters: {
    users(state){
        return state.users
    },
    userFiltered(state) {
        return state.users.filter(user => user.id % 2 === 0)
    }
 }
})
app.use(store)
app.mount('#app')
