<template>
  <article>
    <h3>{{ card.title }}</h3>
    <slot name="main" :card="card"></slot>
    <button class="btn-modal" data-form-index="2">{{ card.btn }}</button>
  </article>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
      validator: (obj) => {
        let card = JSON.parse(JSON.stringify(obj))
        // eslint-disable-next-line no-prototype-builtins
        return card.hasOwnProperty('title') && card.hasOwnProperty('btn')
      }
    }
  }
}
</script>