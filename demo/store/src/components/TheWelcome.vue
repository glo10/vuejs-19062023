<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data() {
    return {
      products: [] 
    }
  },
  created() {
    this.findAll()
  },
  computed: { // Récupérer les getters de mon store
    ...mapGetters(['users', 'userFiltered']),
    // On peut combiner avec les données transformés propre à notre composant et celles qu'on recup du store grâce au spread operator ( les ...)
    productsFiltered() {
      return this.products.filter(product => /article/.test(product.name))
    },
  },
  methods: { // Récupérer les actions de mon store
    ...mapActions(['findAll'])
  }
}
</script>

<template>
  <main>
    <div v-for="user in this.users" :key="user.login">
      {{ user.login }}
    </div>
  </main>
</template>
