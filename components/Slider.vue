<template>
	<client-only>
		<carousel 
			:perPage="1"
			paginationActiveColor="rgba(255,255,255,.7)"
			paginationColor="rgba(255,255,255,.15)"
			:paginationPadding="5">
	    <slide
	    	v-for="item in items" 
	    	:key="item.id" 
	    	v-if="item.status === 'published'">
	    	<div class="slide-wrapper">
	    		<div class="container">
	    			<div class="slide-text-wrapper">
				      <h2 class="title is-2">{{item.title}}</h2>
				      <p v-if="item.description" class="is-size-4 pb-1" style="white-space: pre;">{{item.description}}</p>
				      <div class="buttons pt-5">
				      	<a href="" class="button is-medium">Saber más</a>
				      </div>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="slide-image">
	    		<span class="slide-gradient"></span>
	     		<img :src="imageUrl(item.assetUrl) | slider" alt="">
	    	</div>
	    </slide>
	  </carousel>
	</client-only>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				items: []
			}
		},
		async mounted() {
			try {
				await axios.get('https://admin.nseinternacional.org/public/nseinternacional/items/slider')
					.then(response => response.data.data.map(item => {
						const {id, title, status, description, image} = item

						axios.get(`https://admin.nseinternacional.org/public/nseinternacional/files/${image}`)
							.then(response => {
								const assetUrl = response.data.data.data.asset_url
						
								this.items.push({
									id,
									title,
									status,
									description,
									assetUrl
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
				return `${data}?key=thumbnail`
			},
			slider(data) {
				return `${data}?key=slider`
			}
		}
	}
</script>

<style lang="scss">
	.VueCarousel {
		&-pagination {
			position: absolute;
			bottom: 10px;
			left: 0;
		}
		&-slide {
			text-align: right;
			position: relative;
			h2, p {
				color: #fff;
				text-shadow: 0 2px 2px #000000;
			}
		}
	}
	.slide {
		&-gradient {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 2;
			/*background-image: linear-gradient(90deg, rgba(0,0,0,.5) 50%, rgba(0,0,0,0.26) 100%);*/
			background-image: linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.00) 56%);
		}
		&-wrapper {
			text-align: left;
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			transform: translateY(-50%);
			z-index: 3;
		}
		&-image {
			position: relative;
			background-color: black;
			min-height: 250px;
			max-height: 450px;
			&:before {
				content: '';
				display: block;
				padding-top: 30%;
			}
			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
				z-index: 1;
			}
		}
		&-text-wrapper {
			max-width: 600px;
			p {
				font-weight: 500;
			}
		}
	}
</style>