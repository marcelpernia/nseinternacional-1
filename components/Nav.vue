<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    	<router-link class="navbar-item" to="/"><Logo /></router-link>

      <a @click="toggleMenu" role="button" class="navbar-burger burger" :class="{'is-active': isActive}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-start">
      	<nuxt-link class="navbar-item" to="/">Inicio</nuxt-link>
        <nuxt-link class="navbar-item" to="/quienes-somos">Quiénes somos</nuxt-link>
        <nuxt-link class="navbar-item" to="/audiovisuales/radio">Radio</nuxt-link>
        <nuxt-link class="navbar-item" to="/audiovisuales/tv">Tv</nuxt-link>
        <nuxt-link class="navbar-item" to="/audiovisuales/cine">Cine</nuxt-link>
        <nuxt-link class="navbar-item" to="/contacto">Contacto</nuxt-link>
        <nuxt-link @click="toggleMenu" to="/audiovisuales" class="navbar-item">
          <span class="icon"><i class="fa fa-search"></i></span>
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-danger">
              Donar
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive
    },
    mensaje() {
      return alert('alerta');
    }
  },
  watch:{
    $route (to, from){
      this.isActive = false
    }
  } 
}
</script>

<style lang="scss" scoped>
	.navbar {
		border-bottom: solid 1px #e3e3e3 !important;
    &-brand {
      min-height: inherit;
      img {
        max-height: inherit !important;
        width: 160px;

        @media (max-width: 1023px) {
          width: 120px;
        }
      }
    }
	}
</style>