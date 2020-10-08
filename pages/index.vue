<template>
  <div>
    <Slider />
    <Intro></Intro>
    <Middle></Middle>
    <!-- <Podcasts></Podcasts> -->
    <div class="section section--recomendados">
      <div class="container">
        <h2 class="has-text-centered title is-4">TE RECOMENDAMOS</h2>
        <div class="columns is-gapless is-multiline is-mobile">
          <div class="column is-3-desktop is-6-mobile" v-for="item in recomendados" :key="item.id">
            <a class="banner" target="_blank" :href="item.link">
              <figure class="image is-square">
                <img :src="imageUrl(item.img) | thumbnail('podcast')" :alt="item.title">
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>

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

        <div class="section">        
          <h2 class="has-text-centered title is-4 has-text-white">LO MÁS DESTACADO</h2>

          <div class="columns is-mobile is-multiline">
            <Card
              class="column is-4-desktop is-12-mobile"
              v-for="item in destacados"
              :key="item.id"
              :link="item.link"
              :icontype="item.icontype" 
              :title="item.title"
              :thumbnail="imageUrl(item.img) | thumbnail('medium')">
            </Card>
          </div>
        </div>

  <!--       <Audiovisuals 
          section="destacado" 
          :limit="3" 
          grid="is-4-desktop is-12-mobile">
        </Audiovisuals> -->

        <div class="section">          
          <h2 class="has-text-centered title is-4 has-text-white">EL SANTO ROSARIO</h2>
          
          <Audiovisuals 
            :category="4" 
            :limit="4" 
            grid="is-3-desktop is-12-mobile">
          </Audiovisuals>    
        </div>

        <div class="section">          
          <h2 class="has-text-centered title is-4 has-text-white">NOVENAS</h2>
          
          <Audiovisuals 
            :category="5" 
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
  import axios from 'axios';
  export default {
    name: 'home',
    scrollToTop: true,
    head: {
      title: 'nseinternacional.org',
      meta: [
        { hid: 'description', name: 'description', content: 'NSE (Nuestra Señora del Encuentro con Dios) Internacional es un portal de multimedia que promueve el material audiovisual de NSE TV y NSE Radio' },
        { property: 'og:image', content: 'https://admin.nseinternacional.org/public/nseinternacional/assets/aj1ll5lzfbc4w4c0?key=directus-large-contain' }
      ]
    },
    data() {
      return {
        api: 'https://admin.nseinternacional.org/public/nseinternacional/',
        limit: '8',
        items: []
      }
    },
    async mounted() {
      try {
        await axios.get(`${this.api}items/sections_audiovisuales`)
          .then(response => response.data.data.map(item => {
            const {id, audiovisuales_id, sections_id } = item

            axios.get(`${this.api}items/audiovisuales/${audiovisuales_id}?status=published&limit=${this.limit}`)
              .then(response => {

                const {id, title, type, link, image} = response.data.data
                
                axios.get(`${this.api}files/${image}?fields=private_hash`)
                  .then(response => {
                    const private_hash = response.data.data.private_hash

                    this.items.push({
                      id,
                      title,
                      icontype: type,
                      link,
                      img: private_hash,
                      sections_id
                    })
                  })
              })

          }))
      } 
      catch(error) {
        console.log(error)
      }
    },
    computed: {
      recomendados() {
        return this.items.filter(item => item.sections_id == 2).slice(0, 4)
      },
      destacados() {
        return this.items.filter(item => item.sections_id == 1).slice(0, 3)
      }
    },
    methods: {
      imageUrl(value) {
        return `https://admin.nseinternacional.org/public/nseinternacional/assets/${value}`;
      }
    },
    filters: {
      thumbnail(data, key="directus-medium-contain") {
        return `${data}?key=${key}`
      }
    }
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

  .section--recomendados {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: #EEEEEE;
    }
  }
  .banner {
    opacity: .9;
    transition: all 200ms linear;
    &:not([href]) {
      cursor: default;
    }
    &:hover {
      opacity: 1;
    }
  }
</style>
