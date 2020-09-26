<template>
  <div id="container">
    <Nav />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script></script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
  body {
    font-family: 'Montserrat', sans-serif;
  }
  body, html {
    height: 100%;
  }
  main {
    min-height: calc(100% - 225px);
  }  

  #container,
  #__nuxt,
  #__layout {
    height: 100%;
  }
</style>
