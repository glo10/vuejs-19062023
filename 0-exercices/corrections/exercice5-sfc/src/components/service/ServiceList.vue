<template>
  <section>
    <h2>Nos services</h2>
    <div>
      <service-card-item :card="cards[0]">
        <template #main>
          <ul>
            <li>
              Opérations sans limite, mais attention aux agios qui risquent d'être sans limite aussi
            </li>
            <li>Une carte MasterCard incluse</li>
            <li>Un découvert illimité</li>
            <li>Payez tout avec votre carte en France, à l'international</li>
          </ul>
          <img
            src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
            alt="Credit card image">
        </template>
      </service-card-item>
      <service-card-item :card="cards[1]">
        <template #main>
          <p>
            Vous êtes un prince, vous pouvez effectuer un retrait en ligne et récupérez l'argent chez un de nos
            partenaires ou par un coursier
          </p>
          <img
            src="https://images.unsplash.com/photo-1611605862651-c91b8778ce01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="ATM icon">
        </template>
      </service-card-item>
      <service-card-item :card="cards[2]">
        <template #main>
          <p>Vous allez nous desteter, mais il faut bien qu'on gagne notre vie aussi.</p>
          <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib" alt="Man smiles image">
        </template>
      </service-card-item>
    </div>
  </section>
</template>
<script>
import ServiceCardItem from '@/components/service/ServiceCardItem.vue'
export default {
  components: {
    ServiceCardItem
  },
  data(){
    return {
      cards: [
        {
          title: 'Ouvrir un compte Money+',
          btn: 'Ouvrir un compte',
        },
        {
          title: 'Effectuer un retrait',
          btn: 'Retrait',
        },
        {
          title: 'Payer mes agios',
          btn: 'Agios',
        }
      ]
    }
  }
}
</script>