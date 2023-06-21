# Mise en place routes imbriquées

---

## Route details contient la route repositories

### Partie template

```
<template>
  <h2>Details {{ user.name }}</h2>
  <go-back/> <!--Bouton précédent-->
  <img :src="user.avatar_url" :alt="user.login">
  <ul class="list-group">
    <li class="list-group-item" v-for="(val, k) in user" :key="k">{{ k }} : {{ val }}</li>
  </ul>
  <!-- Lien vers la page repositories qui est directement chargé après les informations de la page détails grâce à la balise router-view ci-après-->
  <router-link :to="{ name: 'repositories', params: { login: user.login } }">Voir les repositories</router-link>
  <!--:key="$route.path" force vue to re-render-->
  <router-view :key="$route.path" />
</template>
```
---

### Config routes router/index.js

```
{
    path: '/user/:login',
    name: 'userDetails',
    component: () => import('@/views/UserDetailsView.vue'),
    props: (route) => ({login: route.params.login}),
    children: [
      {
        path: '/user/:login/repositories',
        name: 'repositories',
        component: () => import('@/views/UserRepositoriesView.vue')
      }
    ]
  },
```

---

### Mise en place router + vueX dans main.js

```
import { createApp } from 'vue' // createApp permet de créer une instance de Vue et ensuite grâce à sa méthode mount d'injecter les templates dans un élement de notre DOM qui a l'id #app
import App from './App.vue' // composant root
import router from './router'
import './assets/css/main.css'
import store from '@/store'

const app = createApp(App)
app.use(router) // Ajout du router
app.use(store) // Ajout du store

app.mount('#app') // Injection dans le DOM dans l'élément qui a l'ID #app
```