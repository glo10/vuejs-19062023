/**
 * Mise en place du store avec
 * la fonction createStore pour créer le store
 * le state
 * Les mutations
 * Les actions
 * Et les getters
 * 
 * Tout ceci a été externalisé vers des fichiers externes indépendantes
 *  => facilite la maintenance de séparer mais vous pouvez tout mettre ici
 */
import { createStore } from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
const store = createStore({
  state,
  mutations,
  actions,
  getters
})
export default store // on exporte tout pour pouvoir mettre en place le store dans main.js
