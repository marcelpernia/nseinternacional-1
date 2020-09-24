<template>
	<div class="column is-4-desktop is-half-tablet is-half-mobile">
	  <div class="card">
	    <div class="card-image">
	      <figure class="image is-4by3">
	        <img :src="thumbnail" alt="Placeholder image">
	      </figure>
	    </div>
	    <div class="card-content">
	    	<div class="card-heading">
		      <span class="icon"><i class="fa" :class="icontype"></i></span>
		      <h3 class="title is-5 is-spaced mb-1">{{title}}</h3>
		      <p class="subtitle is-7">Categoría</p>
	    	</div>
	    </div>
	  </div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'thumbnail', 'icontype']
	}
</script>

<style lang="scss" scoped>
	.card {
		/*padding: 5%;*/
		background-color: rgba(19, 19, 19, .7);
	}
	.card * {
		color: #fff;
	}
	.card-content {
		
	}
	.card-heading {
		position: relative;
		padding-left: 30px;
		h3 {
			font-weight: 500;
		}
	}
	.card-heading .icon {
		position: absolute;
		left: 0;
		top: 0;
		font-size: 18px;
	}
	.card-heading .subtitle {
		color: gray;
	}
	.card-image img {
		object-fit: cover;
	}
	.icontype {
		color: #fff;
	}
	.content {
	}
</style>