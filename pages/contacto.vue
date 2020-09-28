<template>
	<div class="section has-background-light">
		<div class="container">
			<h2 class="title is-4 has-text-centered">Contácto</h2>

			<div class="columns is-centered">
				<div class="column is-half">
					<div class="box">
						<form action="" class="form">
							<div class="field">
								<input type="text" class="input is-fullwidth" placeholder="Nombre" required>	
							</div>
							<div class="field">
								<input type="email" class="input is-fullwidth" placeholder="Correo electrónico">	
							</div>
							<div class="field">
								<textarea class="textarea" placeholder="Mensaje"></textarea>
							</div>
							<div class="field">
								<button class="button is-link is-medium">
									<span class="icon"><i class="fa fa-paper-plane"></i></span>
									<span>Enviar</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<style lang="scss" scoped>
	.section {
		height: 100%;
		background-color: #f8f8f8 !important;
	}
</style>