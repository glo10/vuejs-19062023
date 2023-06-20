<script>
export default {
  props:['btn'],
  emits: [
    'get-result',
    'clear'
  ]
}
</script>
<template>
  <div>
    <button class="btn btn-primary m-2" @click="$emit(btn.customEvent)">
      {{ btn.label }}
    </button>
  </div>
</template>
<style>
  .btn {
    width: 100%!important;
  }
</style>