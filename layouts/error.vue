<template>
	<div class="section">
		<div class="container has-text-centered">
			<div class="pb-5">
				<i class="far fa-frown"></i>
			</div>
			<div class="columns is-centered">
				<div class="column is-half">
					<div class="notification is-fullwidth is-danger is-light has-text-centered">
						<strong>Disculpe.</strong> La página que busca no existe o ha sido eliminada. <nuxt-link to="/">Ir al home</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		layout: 'error-layout'
	}
</script>

<style scoped>
	i {
		font-size: 200px;
		color: #EEF1F1;
		display: block;
		margin-bottom: 30px;
	}
</style>