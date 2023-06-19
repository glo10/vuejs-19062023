<template>
  <my-presentation />
</template>
<script>
import MyPresentation from '@/components/MyPresentation.vue'
export default {
  name: 'App',
  components: {
    MyPresentation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
