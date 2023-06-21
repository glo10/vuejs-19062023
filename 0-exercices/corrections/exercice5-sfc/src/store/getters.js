// Transformation des données grâce aux getters (un peu l'équivalent de computed)
export default {
  // Les getters prennent en 1er paramètre obligatoire le state et 2nd en option les autres getters
  users(state) {
    return state.users
  },
  totalUsers(state, getters) {
    return getters.users.length
  },
  current: state => state.user,
  currency: state => state.currency
}