<template>
	<div class="tile is-ancestor">
	  <div class="tile is-6 bigger has-img">
	    <img class="filter-1" src="images/p-molina.jpg" alt="">
	    <div>
	    	<h4 class="title is-5 has-text-white">Conformamos un equipo internacional de misioneros laicos y de colaboradores voluntarios formados en la espiritualidad del Padre Rodrigo Molina</h4>
	    </div>
	  </div>
	  <div class="tile is-6 is-parent">
	  	<div class="tile is-vertical is-parent">
				<div class="tile smaller color-1">
				 	<div>
				 		<icon-radio></icon-radio>
				 		<h4 class="title is-4 has-text-white my-4">Radio</h4>
				 		<p class="has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				 	</div>
				</div>
				<div class="tile smaller color-3">
				 	<div>
				 		<icon-film></icon-film>
				 		<h4 class="title is-4 has-text-white my-4">Cine</h4>
				 		<p class="has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				 	</div>
				</div>
	  	</div>
	  	<div class="tile is-vertical is-parent">
				<div class="tile smaller color-2">
					<div>
						<icon-tv></icon-tv>
						<h4 class="title is-4 has-text-white my-4">Televisión</h4>
						<p class="has-text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</div>
				<div class="tile smaller has-img">
				 	<img src="images/foto-nse-radio.jpg" alt="">
				</div>
	  	</div>
	  </div>
	</div>
</template>

<style lang="scss" scoped>
	.tile {
		margin: 0 !important;
		&.color {
			&-1 {
				background-color: #003865;
			}
			&-2 {
				background-color: #005EB8;
			}
			&-3 {
				background-color: #BD9B60;
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
		align-items: flex-end;
		padding: 50px 20% 50px 50px;
		min-height: 500px;
		.title {
			font-weight: 500;
			line-height: 28px;
		}
	}
	.smaller {
		box-shadow: none;
		align-items: flex-end;
		padding: 50px 20% 50px 50px;
		svg {
			color: white;
			width: 64px;
			opacity: 0.3;
		}
		@media (max-width: 765px) {
			.title {
				margin: 10px 0 !important;
			}
		}
	}
</style>