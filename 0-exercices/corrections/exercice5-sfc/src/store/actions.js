/**
 * Les users sont enregistrés un fichier json
 * Pour éviter d'être bloqué par le serveur GitHub à cause d'un nombre trop important des requêtes
*/
import {users} from '@/assets/data/users.json'
export default {
  /**
   * Toutes les actions dont j'ai besoin pour pouvoir faire des commits aux mutations pour la modification du store
   * Une action prend obligatoire en paramètre la fonction commit depuis l'objet store et en option le payload(données à transmettre au store s'il y'en a)
   * { commit } signifie qu'on récupère uniquement la fonction commit depuis l'objet store
   * */ 
  setCurrency({ commit }, currency) {
    commit('currency', currency)
  },
  changeCurrentUser({ commit }, user) {
    commit('changeCurrentUser', user)
  },
  async getUsers({ commit }) { //
      try {
        let i = 0
        const usersStore = []
        for (; i < users.length; i++) {
          let user = await fetch(`https://api.github.com/users/${users[i]}`)
          user = await user.json()
          usersStore.push(user)
        }
        commit('users', usersStore)
      }
      catch (error) {
        console.log('error', error)
      }
    }
}