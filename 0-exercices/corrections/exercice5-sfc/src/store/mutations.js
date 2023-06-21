export default {
  /**
   * Seul endroit ou vous êtes autorisés à modifier le state
   * Les mutations prennent obligatoirement le state en 1er params puis le payload = nouveau state
   * */ 
  currency(state, newCurrency) {
    state.currency = newCurrency
  },
  changeCurrentUser(state, user) {
    state.user = user
  },
  users(state, users) {
    state.users = users
  }
}