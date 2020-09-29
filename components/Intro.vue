<template>
	<div class="section">
		<div class="container">
			<div class="columns is-vcentered">
				<div class="column is-half">
					<h4 class="title is-6 title--intro" v-if="item.text_1">{{item.text_1}}</h4>
					<nuxt-link to="quienes-somos" class="button is-link is-medium">Saber más</nuxt-link>
				</div>
				<div class="column is-half pl-0">
					<figure class="image is-16by9">
						<iframe class="has-ratio" width="560" height="315" src="https://www.youtube.com/embed/weLYlkLXXHM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</figure>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Intro',
		data() {
			return {
				api: 'https://admin.nseinternacional.org/public/nseinternacional',
				fields: [
					'text_1',
					'url_video'
				],
				item: '',
				test: 'uno'
			}
		},
		async created() {
			try {
				await axios.get(`${this.api}/items/inicio?single=1&fields=${this.fields}`)
					.then(response => this.item = response.data.data)
			} catch(error) {
				console.log(error)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.image {
		object-fit: cover;
		iframe {
			width: 100%;
		}
	}
	.title {
		font-weight: 500;
		line-height: 34px;
		@media (max-width: 1024px) {
			font-size: 0.9rem;
			line-height: 25px;
		}
	}
</style>