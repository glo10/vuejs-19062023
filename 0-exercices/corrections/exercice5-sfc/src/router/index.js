import { createRouter, createWebHistory } from 'vue-router' // Fonctions à importer qui sont nécessaire à la mise en place des routes
import routes from '@/router/routes.js' // Toutes mes routes = Toutes mes pages web

const router = createRouter({
  history: createWebHistory(), // Définir quel mode de navigation ici le web classique avec la navigation page par page
  routes // les routes récupérés depuis router/routes.js
})

export default router // export le router pour pouvoir l'importer dans main.js pour la mise en place des routes