<template>
	<div class="section">
		<div class="container">
			<div class="columns is-vcentered">
				<div class="column is-half">
					<h4 class="title is-6 title--intro" v-if="item.text_1">{{item.text_1}}</h4>
					<nuxt-link to="quienes-somos" class="button is-link is-medium">Saber más</nuxt-link>
				</div>
				<div class="column is-half pl-0">
					<figure class="image is-16by9" v-if="item.url_video" v-html="item.url_video"></figure>
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
	/deep/ .image iframe {
		width: 100%;
		height: 100%;
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
	.title--intro {
		font-weight: 500;
		line-height: 34px;
	}
</style>