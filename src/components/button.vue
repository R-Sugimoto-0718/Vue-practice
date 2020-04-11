<template>
  <div>
    <div v-if="greeting" class="top-text">{{greeting}}</div>
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