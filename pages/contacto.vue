<template>
	<div>
		<div class="section">
			<div class="container pb-5">
				<h2 class="title is-4 has-text-centered">Contacto</h2>

				<div class="columns is-centered">
					<div class="column is-half">
						<div class="box">
							<form @submit.prevent="sendEmail">
								<div class="field">
									<span class="label">Nombre</span>
									<input 
										type="text" 
										class="input is-fullwidth" 
										placeholder="Nombre" 
										name="nombre"
										v-model="nombre"
										required>	
								</div>
								<div class="field">
									<span class="label">Correo electrónico</span>
									<input 
										type="email" 
										class="input is-fullwidth" 
										placeholder="Correo electrónico"
										name="email"
										v-model="email"
										required>	
								</div>
								<div class="field">
									<span class="label">Mensaje</span>
									<textarea 
										class="textarea" 
										placeholder="Mensaje"
										name="mensaje"
										v-model="mensaje"></textarea>
								</div>
								<div class="field">
									<div class="g-recaptcha" data-sitekey="6Lfvj9QZAAAAADMHlXYhtMu2K2Z4BZgc9t36tQTL"></div>
								</div>
								<div class="field">
									<button type="submit" :class="{'is-loading': sending}" class="button is-link is-medium is-fullwidth">
										<span>Enviar mensaje</span>
										<span class="icon"><i class="fa fa-paper-plane"></i></span>
									</button>
								</div>
							</form>
							<div v-if="feedback" class="notification is-light mt-2" :class="statusClass">
								<button class="delete" @click="feedback = false"></button>
								{{statusMessage}}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
		<div class="section"></div>
	</div>
</template>
<script>
	import emailjs from 'emailjs-com';
	export default {
		name: 'pagina contacto',
		scrollToTop: true,
		head() {
	    return {
	      title: 'Contacto', // Other meta information
	      script: [
	        { hid: 'emailsend', src: '/smtp.js', defer: true },
	        { hid: 'recaptcha', src: 'https://www.google.com/recaptcha/api.js', defer: true }
	      ]
	    }
	  },
	  data() {
	  	return {
	  		sending: false,
	  		feedback: false,
	  		statusMessage: '',
	  		statusClass: '',
	  		nombre: '',
	  		email: '',
	  		mensaje: ''
	  	}
	  },
		methods: {
			sendEmail(e) {
				this.sending = true

	      emailjs.sendForm('service_a4ci666', 'template_c4mp1xf', e.target, 'user_xHECOOvKNOTcwdQtVTmCB')
	        .then((result) => {
	          console.log('SUCCESS!', result.status, result.text);
	        	this.feedback = true
	          this.statusClass = 'is-success'
	          this.statusMessage = 'Hemos recibido tu mensaje. Gracias por escribirnos!'

	        	this.nombre = ''
			  		this.email = ''
			  		this.mensaje = ''
	        })
	        .catch(error => {
	        	// console.log('FAILED', error.status)
    				if (error.status === 400) {
	    				this.feedback = true
	    				this.statusClass = 'is-danger'
	    				this.statusMessage = 'Por favor complete el reCAPTCHA'
    				}
	        })
	        .finally(() => {
						this.sending = false
					})
	    }
		}
	}
</script>
<style lang="scss" scoped>
	.section {
		height: 100%;
		background-color: #f8f8f8 !important;
		box-shadow: 0 3000px 0 #f8f8f8;
	}
	.notification {
		font-size: 14px;
		padding: 10px;
	}
	.notification.is-success {
		background-color: #F4E4C8;
		color: var(--beige);
	}
</style>