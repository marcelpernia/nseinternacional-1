<template>
	<div class="section">
		<div class="container">
			<div class="columns is-vcentered">
				<div class="column is-half">
					<h4 class="title is-6">NSE (Nuestra Señora del Encuentro con Dios) Internacional es una plataforma que promueve el material audiovisual de NSE TV y NSE Radio, para dar a conocer la Verdad del Evangelio y responder adecuadamente a las necesidades e intereses de los más vulnerables hoy: la familia, los pobres, los ancianos, los enfermos, los bebés por nacer, los niños y jóvenes.</h4>

					<nuxt-link to="quienes-somos" class="button is-link is-medium">Saber más</nuxt-link>
				</div>
				<div class="column is-half">
					<figure class="image is-16by9">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/weLYlkLXXHM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
					</figure>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	iframe {
		width: 100%;
		height: 100%;
		bottom: 0;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
	}
	.title {
		font-weight: 500;
		line-height: 34px;
	}
</style>