<template>
  <div>
    <div class="top-text">{{greeting}}</div>
    <input v-model="greeting">
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        greeting: 'nice'
      }
    },
  }
</script>

<style lang="scss" scoped>
  
</style>