<template>
  <div>
    <Slider />
    <Intro></Intro>
    <Middle></Middle>
    <Podcasts></Podcasts>
    <div class="section section--feature">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <h2 class="has-text-centered title is-4 has-text-white">LO MÁS DESTACADO</h2>
          </div>
          <div class="level-right">
            <div class="buttons">
              <a href="" class="button is-danger">
                <span>Radio en Vivo</span>
              </a>
              <a href="" class="button is-danger">
                <span>Tv en Vivo</span>
              </a>
            </div>
          </div>
        </div>
        <div class="columns is-mobile is-multiline">
          <Card
            icontype="fa-tv" 
            title="El Misterio del Perdón"
            thumbnail="https://img.youtube.com/vi/AaH0Zo-JcqY/0.jpg">
          </Card>
          <Card
            icontype="fa-volume-up" 
            title="Sufrimiento y Eutanasia"
            thumbnail="https://img.youtube.com/vi/Fx_Qac9XXvw/0.jpg">
          </Card>
          <Card
            icontype="fa-tv" 
            title="El Buen Pastor"
            thumbnail="https://img.youtube.com/vi/bXJ8dABHmK4/0.jpg">
          </Card>
          <Card
            icontype="fa-tv" 
            title="El Misterio del Perdón"
            thumbnail="https://img.youtube.com/vi/AaH0Zo-JcqY/0.jpg">
          </Card>
          <Card
            icontype="fa-volume-up" 
            title="Sufrimiento y Eutanasia"
            thumbnail="https://img.youtube.com/vi/Fx_Qac9XXvw/0.jpg">
          </Card>
          <Card
            icontype="fa-tv" 
            title="El Buen Pastor"
            thumbnail="https://img.youtube.com/vi/bXJ8dABHmK4/0.jpg">
          </Card>
        </div>

        <div class="buttons is-centered pt-5">
          <a href="" class="button is-white is-medium">Ver más</a>
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
    box-shadow: inset 0 -2000px 0 rgba(0,0,0,.8);
  }
  .button.is-danger {
    background-color: #DA343C;
    &:hover {
      background-color: #C32F37 !important;
    }
  }
</style>
