<template>
	<div>
		<div class="section">
			<div class="container pb-5">
				<h2 class="title is-4 has-text-centered">Contacto</h2>

				<div class="columns is-centered">
					<div class="column is-half">
						<div v-if="feedback" :class="" class="notification is-success is-light mb-2">
							<button class="delete" @click="feedback = false"></button>
							<strong>Hemos recibido tu mensaje.</strong> Gracias por escribirnos!
						</div>
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
									<button type="submit" :class="{'is-loading': sending}" class="button is-link is-medium is-fullwidth">
										<span>Enviar mensaje</span>
										<span class="icon"><i class="fa fa-paper-plane"></i></span>
									</button>
								</div>
							</form>
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
			sendEmail(e) {
				this.sending = true

	      emailjs.sendForm('service_a4ci666', 'template_c4mp1xf', e.target, 'user_xHECOOvKNOTcwdQtVTmCB')
	        .then((result) => {
	          console.log('SUCCESS!', result.status, result.text);

	        	this.feedback = true
	        })
	        .catch(error => {
	        	console.log('FAILED', error)
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
		background-color: #f8f8f8 !important;
		box-shadow: 0 3000px 0 #f8f8f8;
	}
</style>