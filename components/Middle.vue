<template>
	<div class="tile is-ancestor">
	  <div class="tile is-6 bigger has-img">
	    <img :src="imageUrl(item.img1) | thumbnail('directus-large-contain')" alt="">
	    <div>
	    	<h4 class="title is-5 has-text-white">{{item.text_2}}</h4>
	    </div>
	  </div>
	  <div class="tile is-6 is-parent">
	  	<div class="tile is-vertical is-parent">
				<a href="/audiovisuales/radio" class="tile smaller color-1">
				 	<div>
				 		<icon-radio></icon-radio>
				 		<h4 class="title is-4 has-text-white my-4 is-uppercase">Radio</h4>
				 		<p class="has-text-white">NSE Radio continúa evangelizando...</p>
				 	</div>
				</a>
				<a href="/audiovisuales/cine" class="tile smaller color-2">
				 	<div>
				 		<icon-cine></icon-cine>
				 		<h4 class="title is-4 has-text-white my-4 is-uppercase">Cine</h4>
				 		<p class="has-text-white">NSE Cine trabaja por dar a conocer...</p>
				 	</div>
				</a>
	  	</div>
	  	<div class="tile is-vertical is-parent">
				<a href="/audiovisuales/tv" class="tile smaller color-3">
					<div>
						<icon-tv></icon-tv>
						<h4 class="title is-4 my-4 is-uppercase has-text-dark">Televisión</h4>
						<p class=" has-text-dark">NSE Televisión transmite una programación...</p>
					</div>
				</a>
				<div class="tile smaller has-img is-hidden-mobile">
				 	<img class="filter-1" :src="imageUrl(item.img2) | thumbnail('medium')" alt="">
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
				fields: [
					'text_2',
					'img_1',
					'img_2'
				],
				item: '',
			}
		},
		async created() {
			try {
				await axios.get(`${this.api}/items/inicio?single=1&fields=${this.fields}`)
					.then(response => {
						const {text_2, img_1, img_2} = response.data.data

						axios.get(`${this.api}/files/${img_1},${img_2}?fields=id,private_hash`)
							.then(response => {

								const private_hash = response.data.data
								let img1 = private_hash.find(item => item.id === img_1)
								let img2 = private_hash.find(item => item.id === img_2)

								this.item = {
									text_2, 
									'img1': img1.private_hash,
									'img2': img2.private_hash
								}
							})
					})
			} catch(error) {
				console.log(error)
			}
		},
		filters: {
			thumbnail(data, key="directus-medium-contain") {
				return `${data}?key=${key}`
			}
		},
		methods: {
			imageUrl(value) {
				return `https://admin.nseinternacional.org/public/nseinternacional/assets/${value}`;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tile {
		margin: 0 !important;
		&.color {
			&-1 {
				background-color: #464646;
				background-color: var(--darkblue);
			}
			&-2 {
				background-color: #282828;
				background-color: var(--lightblue);
			}
			&-3 {
				background-color: #464646;
				background-color: var(--beige);
			}
		}
	}
	.is-parent {
		padding: 0 !important;
	}

	.has-img {
		box-shadow: inset 0 -1000px 0 rgba(0,0,0,.54);
		position: relative;
		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			&.filter {
				&-1 {
					filter: grayscale(1);
				}
			}
			z-index: -1;
		}
	}

	.bigger {
		display: flex;
		align-items: flex-end;
		padding: 50px 20% 50px 50px;
		min-height: 500px;
		> div {
			z-index: 2;
		}
		.title {
			font-weight: 500;
			line-height: 28px;
			text-shadow: 2px 2px 2px #000;
		}		
	/*	&:before {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 500px;
			box-shadow: inset 0 -300px 10px rgba(0,0,0,.6);
			z-index: 1;
		}*/
	}
	.smaller {
		box-shadow: none;
		align-items: flex-end;
		padding: 50px 20% 50px 50px;
		svg {
			color: white;
			width: 64px;
			opacity: 0.3;
			transition: all 200ms linear;
		}
		&:hover svg {
			opacity: .6;
		}
	}
	@media (max-width: 980px) {
		.smaller {
			padding: 20px;
			.title {
				margin: 10px 0;
				font-size: 1.2rem;
			}
			p {
				font-size: 12px;
			}
		}
		.bigger {
			padding: 20px;
			.title {
				font-size: 16px;
				line-height: 21px;
			}
		}
	}
	@media (max-width: 768px) {
		.bigger {
			min-height: 350px;
		}
		.smaller {
			padding: 10px;
			.title {
				margin: 5px 0 !important;
			}
			svg {
				width: 30px;
			}
		}
	}
</style>