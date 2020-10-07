<template>
  <div>
    <Slider />
    <Intro></Intro>
    <Middle></Middle>
    <Podcasts></Podcasts>
    <div class="section section--feature">
      <div class="container">
        <!-- <div class="level">
          <div class="level-left">
            <h2 class="has-text-centered title is-4 has-text-white">LO MÁS DESTACADO</h2>
          </div>
          <div class="level-right is-hidden-mobile">
            <div class="buttons is-centered">
              <a href="" class="button is-danger">
                <span>Radio en Vivo</span>
              </a>
              <a href="" class="button is-danger">
                <span>Tv en Vivo</span>
              </a>
            </div>
          </div>
        </div> -->

        <h2 class="has-text-centered title is-4 has-text-white">LO MÁS DESTACADO</h2>

        <Audiovisuals 
          section="destacado" 
          :limit="3" 
          grid="is-4-desktop is-12-mobile">
        </Audiovisuals>

        <div class="section">          
          <h2 class="has-text-centered title is-4 has-text-white">EL SANTO ROSARIO</h2>
          
          <Audiovisuals 
            section="rosario" 
            :limit="4" 
            grid="is-3-desktop is-12-mobile">
          </Audiovisuals>    
        </div>

        <div class="section">          
          <h2 class="has-text-centered title is-4 has-text-white">NOVENAS</h2>
          
          <Audiovisuals 
            section="novenas" 
            :limit="3" 
            grid="is-4-desktop is-12-mobile">
          </Audiovisuals>  
        </div>

        <div class="buttons is-centered">
          <nuxt-link to="/audiovisuales" class="button is-white is-medium">Ver todo</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .section--feature {
    background-image: url('/images/estudio.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    box-shadow: inset 0 -5000px 0 rgba(0,0,0,.8);
  }
</style>
