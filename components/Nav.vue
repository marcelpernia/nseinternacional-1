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
      	<router-link class="navbar-item" to="/">Inicio</router-link>

        <router-link class="navbar-item" to="/quienes-somos">Quiénes somos</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Radio
          </a>

     <!--      <div class="navbar-dropdown">
            <a class="navbar-item has-dropdown is-hoverable">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div> -->

        </div>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Tv
          </a>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Cine
          </a>
        </div>
        <a class="navbar-item">
          Eventos
        </a>
        <a class="navbar-item">
          Contacto
        </a>
        <a class="navbar-item">
          <span class="icon"><i class="fa fa-search"></i></span>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-link">
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

<style>
	.navbar {
		border-bottom: solid 1px #e3e3e3 !important;
	}
	.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {
		border: 2px solid #8C8E8E;
		border-right: 0;
		border-top: 0;
	}
  .nabvar .button.is-primary {
    background-color: #723D46 !important;
  }
</style>