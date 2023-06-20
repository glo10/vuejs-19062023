<script>
export default {
  data() {
    return {
      final: 0
    }
  }
}
</script>
<template>
  <div>
    <div id="finalAmount" class="text-center">
      <h2>Converted Amount :
        <span class="finalValue"> {{ final }}</span>
      </h2>
    </div>
  </div>
</template>