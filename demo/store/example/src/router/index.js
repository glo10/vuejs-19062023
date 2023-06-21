import { createRouter, createWebHistory } from 'vue-router' // Fonctions à importer qui sont nécessaire à la mise en place des routes

const router = createRouter({
  history: createWebHistory(), // Définir quel mode de navigation ici le web classique avec la navigation page par page
  routes: [
    {
      path: '/', // chemin
      name: 'home', // nom associé au chemin
      component: HomeView // Composant ou plus précisement la page à charger lorsque cette route est appélée
    }
  ]
})

export default router // export le router pour pouvoir l'importer dans main.js pour la mise en place des routes