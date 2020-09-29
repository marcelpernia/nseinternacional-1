<template>
	<div class="section">
		<div class="container">
			<h2 class="title is-4 has-text-centered">Contacto</h2>

			<div class="columns is-centered">
				<div class="column is-half">
					<div v-if="feedback" class="notification is-success is-light mb-2">
						<button class="delete" @click="feedback = false"></button>
						<strong>Hemos recibido tu mensaje.</strong> Gracias por escribirnos!
					</div>
					<div class="box">
						<div class="field">
							<input 
								type="text" 
								class="input is-fullwidth" 
								placeholder="Nombre" 
								v-model="nombre"
								required>	
						</div>
						<div class="field">
							<input 
								type="email" 
								class="input is-fullwidth" 
								placeholder="Correo electrónico"
								v-model="email"
								required>	
						</div>
						<div class="field">
							<textarea 
								class="textarea" 
								placeholder="Mensaje"
								v-model="mensaje"></textarea>
						</div>
						<div class="field">
							<button class="button is-link is-medium is-fullwidth" :class="{'is-loading': sending}" @click="enviar">
								<span>Enviar mensaje</span>
								<span class="icon"><i class="fa fa-paper-plane"></i></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>
<script>
	export default {
		head() {
	    return {
	      title: 'Pagina de contacto', // Other meta information
	      script: [
	        { hid: 'emailsend', src: '/smtp.js', defer: true }
	      ]
	    }
	  },
	  data() {
	  	return {
	  		sending: false,
	  		feedback: false,
	  		nombre: '',
	  		email: '',
	  		mensaje: ''
	  	}
	  },
		methods: {
			enviar() {
				this.sending = true
				Email.send({
			    Host : "nseinternacional.org",
			    Username : "info@nseinternacional.org",
			    Password : "CXR!6k8Raj9H",
			    To : 'marcelpm1987@gmail.com',
			    From : "info@nseinternacional.org",
			    Subject : `Mensaje de ${this.nombre}`,
			    Body : `
			    	Nombre: ${this.nombre}<br>
			    	Email: ${this.email}<br>
			    	Mensaje: ${this.mensaje}<br>.<br>.<br>.<br>
			    	<span style="font-size: 12px;color: #8C8E8E;">Mensaje enviado desde nseinternacional.org</span>
			    `
				})
				.then(message => {
					// alert(message)
					this.feedback = true
				})
				.catch(error => {
					console.log(error)
				})
				.finally(() => {
					this.sending = false
					this.nombre = ''
		  		this.email = ''
		  		this.mensaje = ''
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.section {
		height: 100%;
		/*background-color: #f8f8f8 !important;*/
		/*box-shadow: inset 0 3000px 0 #f8f8f8;*/
	}
</style>