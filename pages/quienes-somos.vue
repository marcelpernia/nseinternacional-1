<template>
	<div class="section">
		<div class="container py-5">
			<div class="columns">
				<div class="column">
					<h2 class="title is-4 mb-6 is-uppercase">Quiénes somos</h2>
					<figure class="image is-4by5">
						<img :src="post.image | thumbnail('directus-large-contain')" alt="">
					</figure>
				</div>
				<div class="column pl-5">
					<div class="content" v-html="post.content"></div>
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
				api: 'https://admin.nseinternacional.org/public/nseinternacional',
				post: ''
			}
		},
		mounted() {
			this.$nextTick(() => {
	      this.$nuxt.$loading.start()
	    })

			axios.get(`${this.api}/items/about_us?single=1`)
				.then(response => {
					const {content, image} = response.data.data

					axios.get(`${this.api}/files/${image}`)
						.then(response => {
							const file = response.data.data.data.asset_url
							
							this.post = {
								content,
								image: `https://admin.nseinternacional.org${file}`
							}
						})
				})
				.catch(error => console.log(error))
				.finally(() => this.$nuxt.$loading.finish())
		},
		filters: {
			thumbnail(data, key="directus-medium-contain") {
				return `${data}?key=${key}`
			}
		}
	}
</script>

<style scoped lang="scss">
	.section {
		box-shadow: inset 0 -500px 0 #F8F8F8;
	}
	.image {
		img {
			object-fit: cover;
			box-shadow: 20px 21px 21px -8px rgba(0,0,0,0.31);
		}
	}
	.content {
		max-width: 480px;
	}

	@media (max-width: 768px) {
		.py-5 {
			padding-top: 0 !important;
			padding-bottom: 0 !important;
		}
		.mb-6 {
			margin-bottom: 20px !important;
		}
		.image {
			padding-top: 75% !important;
		}
	}
</style>