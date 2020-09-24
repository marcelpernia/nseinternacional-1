<template>
	<div class="section">
		<div class="container">
			<div class="columns is-vcentered">
				<div class="column is-half">
					<h4 class="title is-6 title--intro" v-if="intro.text">{{intro.text}}</h4>
					<nuxt-link to="quienes-somos" class="button is-link is-medium">Saber más</nuxt-link>
				</div>
				<div class="column is-half">
					<figure class="image is-16by9" v-if="intro.video" v-html="intro.video"></figure>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				intro: {
					text: null,
					video: null
				}
			}
		},
		async mounted() {
			try {
				await axios.get('https://admin.nseinternacional.org/public/nseinternacional/items/inicio')
					.then(response => response.data.data.map(item => {
						const {intro_text, url_video} = item
						this.intro.text = intro_text
						this.intro.video = url_video
					}))
			} catch(error) {
				console.log(error)
			}
		}
	}
</script>

<style lang="scss">
	figure iframe {
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