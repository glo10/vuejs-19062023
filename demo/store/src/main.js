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
    delete(state, oldUser) {
        state.users = state.users.filter(user => user.id != oldUser.id)
    },
    findAll(state, users) {
        state.users = users
    }
 },
 actions: {
    delete({commit}, oldUser){
        commit('delete', oldUser)
    },
    findAll({commit}) {// recup les infos depuis l'API
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(users => {
            console.log('users final', users)
            commit('findAll', users)
        })
    }
 },
 getters: {
    users(state){
        return state.users
    },
    userFiltered(state) {
        return state.users.filter(user => user.id % 2 === 0)
    },
 }
})
app.use(store)
app.mount('#app')
