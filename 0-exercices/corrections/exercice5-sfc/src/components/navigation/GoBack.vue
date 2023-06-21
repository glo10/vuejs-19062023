<template>
  <button @click="this.$router.go(-1)">
  <img
    src="https://api.iconify.design/material-symbols:arrow-circle-left-outline-rounded.svg"
    alt="previous icon"
  >
  <span>Précédent</span>
  </button>
</template>
<style scoped>
button {
  background: inherit;
  width: 64px;
  height: 64px;
  border:none;
  cursor: pointer;
  padding: .5rem .1rem;
}
img {
  width:100%;
  height: 100%;
}
</style>