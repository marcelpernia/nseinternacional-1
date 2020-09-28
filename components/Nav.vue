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

        <a class="navbar-item" href="/audiovisuales?type=radio">Radio</a>

        <a class="navbar-item" href="/audiovisuales?type=tv">Tv</a>

        <a class="navbar-item" href="/audiovisuales?type=cine">Cine</a>

        <a class="navbar-item" href="/contacto">Contacto</a>

        <nuxt-link to="/audiovisuales" class="navbar-item">
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
    }
  }
}
</script>

<style lang="scss" scoped>
	.navbar {
		border-bottom: solid 1px #e3e3e3 !important;
    @media (min-width: 1024px) {  
      &-brand {
        min-height: 4.65rem;
      }
      &-item img {
        max-height: 2.75rem;
      } 
    }
	}
</style>