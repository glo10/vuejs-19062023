/*
* Chargement dès les débuts de toutes les pages ou composants 
* qui seront appelées lorsqu'une route sera appelée
* Ci-après une meilleure technique pour le faire à la demande (quand la page est demandée)
*/
import HomeView from '@/views/Homeview.vue'
import GenericView from '@/views/GenericView.vue'
export default [
  {
    path: '/', // chemin
    name: 'home', // nom associé au chemin
    component: HomeView // Composant ou plus précisement la page à charger lorsque cette route est appélée
  },
  {
    path: '/open',
    name: 'open',
    component: GenericView
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: GenericView
  },
  {
    path: '/advice',
    name: 'advice',
    component: GenericView
  },
  {
    path: '/currency',
    name: 'currency',
    /* 
    * Avec import on a un chargement dynamique qui se fait uniquement 
    * lorsqu'on appelle la route 
    * donc on optimise le temps de chargement 
    * parce qu'on ne charge pas toutes nos routes dès le début
    */
    component: () => import('@/views/CurrencyView.vue') 
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('@/views/UsersView.vue'),
  },
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
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound404',
    component: () => import('@/views/NotFoundView.vue')
  },
]