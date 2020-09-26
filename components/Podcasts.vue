<template>
	<div class="section">
		<div class="container">
			<div class="level">
		    <div class="level-left">
		      <h2 class="has-text-centered title is-4">TE RECOMENDAMOS</h2>
		    </div>
		    <div class="level-right">
		      <div class="buttons">
		        <a href="" class="button is-link">
		          <span>Ver más</span>
		        </a>
		      </div>
		    </div>
		  </div>
		  <div class="columns is-gapless is-multiline is-mobile">
		  	<div class="column is-3-desktop is-6-mobile" v-for="item in items" :key="item.id">
		  		<a class="item" target="_blank" :href="item.url">
			  		<figure class="image is-square">
			  			<img :src="imageUrl(item.img)" :alt="item.title">
			  		</figure>
		  		</a>
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
				items: [],
				limit: 4
			}
		},
		async created() {
			try {
				await axios.get(`${this.api}/items/podcasts?status=published&limit=${this.limit}`)
					.then(response => response.data.data.map(item => {
						const {id, title, url, slug, cover} = item

						axios.get(`${this.api}/files/${cover}`)
							.then(response => {
								const assetUrl = response.data.data.data.asset_url
						
								this.items.push({
									id,
									title,
									url,
									slug,
									img: assetUrl
								})
							})

					}))
			} catch (error) {
				console.log(error)
			}
		},
		methods: {
			imageUrl(value) {
				return `https://admin.nseinternacional.org${value}`;
			}
		},
		filters: {
			thumbnail(data) {
				return `${data}?key=cover`
			}
		}
	}
</script>

<style lang="scss" scoped>
	.section {
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
	.item {
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