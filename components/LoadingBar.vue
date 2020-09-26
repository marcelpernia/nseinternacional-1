<template>
  <div v-if="loading" class="loading-page">
    <div class="button is-loading is-primary"></div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .button.is-primary {
    background-color: var(--beige) !important;
  }
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>