<template>
	<a target="_blank" :href="link" class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img :src="thumbnail" :alt="title">
      </figure>
    </div>
    <div class="card-content">
    	<div class="media">
	      <div class="media-left">
	      	<figure class="image is-48x48" v-html="getIcon"></figure>
	      </div>
	      <div class="media-content">
	       	<h3 class="title is-6 is-spaced mb-1">{{title}}</h3>
	      </div>
	    </div>
    </div>
	</a>
</template>

<script>
	export default {
		props: [
			'title', 
			'thumbnail', 
			'icontype',
			'link',
			'clase'
		],
		computed: {
			getIcon() {
				switch (this.icontype) {
				  case 'cine':
				    return `
							<svg width="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="film" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg svg-inline--fa fa-film fa-w-16"><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V284c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm0-176c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm96 144c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z" class=""></path></svg>
							`
				    break;
				  case 'radio':
				    return `
							<svg width="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="radio" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg svg-inline--fa fa-radio fa-w-16"><path fill="currentColor" d="M216 304H72a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm-16 64H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM88 272h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8zm360-144H184.51L506.3 31a8 8 0 0 0 5.36-10L507 5.69a8 8 0 0 0-10-5.35L73.56 128H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64zm32 320a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32V192a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32zM352 224a96 96 0 1 0 96 96 96 96 0 0 0-96-96zm0 160a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z" class=""></path></svg>
							`
				    break;
				  case 'tv':
				    return `
							<svg width="20px" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="tv-retro" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg svg-inline--fa fa-tv-retro fa-w-16"><path fill="currentColor" d="M416 243v-8c0-6.6 5.4-12 12-12h8c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12h-8c-6.6 0-12-5.4-12-12zm96-100v288c0 26.5-21.5 48-48 48h-16v33h-16l-11-33H91l-11 33H64v-33H48c-26.5 0-48-21.5-48-48V143c0-26.5 21.5-48 48-48h160.1l-74.8-67.1c-6.6-5.9-7.2-16-1.3-22.6 5.9-6.6 16-7.2 22.6-1.3L256 95h.8L357.3 4.1c6.6-5.9 16.7-5.4 22.6 1.2 5.9 6.6 5.4 16.7-1.2 22.6L304.5 95H464c26.5 0 48 21.5 48 48zm-32 0c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V143zm-256 49c-68.8 0-106.2 2.3-125.3 4.3-1.3 14.4-2.7 41.5-2.7 90.7 0 50.5 1.4 78 2.7 92.8 19.2 1.9 56.5 4.2 125.3 4.2s106.1-2.3 125.3-4.2c1.3-14.7 2.7-42.3 2.7-92.8 0-49.2-1.4-76.3-2.7-90.7-19.1-2-56.5-4.3-125.3-4.3m0-32c128 0 152 8 152 8s8 0 8 119c0 121-8 121-8 121s-24 8-152 8-152-8-152-8-8 0-8-121c0-119 8-119 8-119s24-8 152-8zm204 159h8c6.6 0 12-5.4 12-12v-8c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12z" class=""></path></svg>
							`
				    break;
				}
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.card {
		background-color: transparent;
		box-shadow: none;
		&:hover .card-content {
			/*background-color: rgba(19, 19, 19, 1);*/
		}
		* {
			color: #fff;
		}
		&-image {
			background-color: #000000;
			img {
				object-fit: contain;
			}
		}
		&:hover .card-content .image {
			background-color: var(--beige);
		}
		&-content {
			background-color: rgba(19, 19, 19, .7);
			transition: all 200ms linear;
			position: relative;
			padding: 20px;
			.image {
				transition: all 200ms linear;
				background-color: rgba(255,255,255,.1);
				padding: 5px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
			}
			.title {
				font-weight: 500;
				min-height: 45px;
				display: flex;
				align-items: center;
			}
			.subtitle {
				color: gray;
			}
		}
	}


  @media (max-width: 768px) {
    .card {
    	&-content {
    		padding: 10px;
    	}
    	.title {
    		font-size: 14px;
    	}
    }
  }
</style>