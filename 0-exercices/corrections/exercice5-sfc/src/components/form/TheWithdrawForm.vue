<template>
  <form>
    <input
      class="form-control"
      type="number"
      v-for="i in inputs"
      :key="i.name" 
      :name="i.name"
      :id="i.name"
      :placeholder="i.placeholder">
    <input type="submit" value="Valider">
  </form>
</template>
<script>
export default {
  data() {
    return {
      inputs: [
        {
          name: 'sold',
          placeholder: "Votre solde",
        },
        {
          name: 'overdraft',
          placeholder: 'Montant du découvert '
        },
        {
          name: 'withdraw',
          placeholder: 'Montant du retrait'
        }
      ]
    }
  }
}
</script>