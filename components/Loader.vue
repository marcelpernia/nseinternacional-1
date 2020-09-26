<template>
  <div class="layer">
    <div class="button is-loading is-primary"></div>
  </div>
</template>

<style scoped>
  .button.is-primary {
    background-color: var(--beige) !important;
  }
  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>