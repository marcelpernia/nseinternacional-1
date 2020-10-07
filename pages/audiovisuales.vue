<template>
	<div>
		<div class="hero is-bold" :class="getTypeClass" v-if="hasType">
			<div class="container">
				<div class="section">
					<h2 class="title is-4 is-uppercase">
						<icon-radio v-if="getType === 'radio'"/>
						<icon-tv v-if="getType === 'tv'"/>
						<icon-cine v-if="getType === 'cine'"/>
						{{getTitle}}
					</h2>
					<div class="content" v-if="getType === 'radio'">
						<p>{{content1}}</p>
					</div>
					<div class="content" v-if="getType === 'tv'">
						<p>NSE Televisión, desde el 2003, bajo el amparo de la Virgen María, Nuestra Señora del Encuentro con Dios, transmite una programación fiel al depósito de la fe contenido en la Sagrada Escritura y la Tradición de la Iglesia Católica, convencida de que la más alta calidad que puede ofrecer a su audiencia es la belleza y atractivo de la Verdad de Dios contenida en su Palabra. Tiene presencia en 3 países y cuenta con 4 estudios de grabación y 3 canales de TV.</p>
					</div>
					<div class="content" v-if="getType === 'cine'">
						<p>NSE Cine, desde el 2016, bajo el amparo de la Virgen María, Nuestra Señora del Encuentro con Dios,  trabaja por dar a conocer la Verdad de Dios, fuente de amor y de vida, según las enseñanzas de la Sagrada Escritura y la Tradición de la Iglesia Católica, para llevar a los hombres a un encuentro personal con Dios.</p>
					</div>
				</div>
			</div>
		</div>
		<div class="section">
			<div class="container">	
				<div class="has-text-centered">
					<h2 class="title is-4 is-uppercase pb-2" v-if="!hasType">{{getTitle}}</h2>
				</div>

				<div class="columns">
					<div class="column">
						<div class="tabs is-centered-mobile">
						  <ul>
						    <!-- <li>
						      <nuxt-link to="/audiovisuales">
						        <span class="icon is-small"><i class="fas fa-search" aria-hidden="true"></i></span>
						        <span>TODO</span>
						      </nuxt-link>
						    </li> -->
						    <li>
						      <nuxt-link to="/audiovisuales/radio">
						        <span class="icon is-small"><i class="fas fa-microphone-alt" aria-hidden="true"></i></span>
						        <span>RADIO</span>
						      </nuxt-link>
						    </li>
						    <li>
						      <nuxt-link to="/audiovisuales/tv">
						        <span class="icon is-small"><i class="fas fa-tv" aria-hidden="true"></i></span>
						        <span>TV</span>
						      </nuxt-link>
						    </li>
						    <li>
						      <nuxt-link to="/audiovisuales/cine">
						        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
						        <span>CINE</span>
						      </nuxt-link>
						    </li>
						  </ul>
						</div>
					</div>
					<div class="column is-narrow">
						<div class="control has-icons-left" :class="{'is-loading': searching}">
							<span class="icon is-small is-left">
					      <i class="fas fa-search"></i>
					    </span>
							<input @input.trim="isSearching" class="input" type="text" placeholder="Buscar por título..." v-model="title">
						</div>
					</div>
				</div>
				
				<!-- <div class="level">
					<div class="level-left">
						<div class="level-item">
						</div>
						<div class="level-item">
							<div class="field has-addons is-expanded">
							  <div class="control is-expanded">
							    <span class="select is-fullwidth">
							      <select v-model="typeSelect">
							      	<option value="">Todo</option>
							        <option value="cine">Cine</option>
							        <option value="radio">Radio</option>
							        <option value="tv">Tv</option>
							      </select>
							    </span>
							  </div>
							  <div class="control">
							    <button class="button is-link" :class="{'is-loading': loading}" @click="searchType()">Buscar</button>
							  </div>
							</div>
						</div>
					</div>
				</div> -->
				<div class="buttons is-centered" v-if="loading">
					<a class="button is-white">
						<span class="icon"><i class="fa fa-spinner fa-spin"></i></span>
						<span>Cargando...</span>
					</a> 
				</div>
				<div class="columns is-mobile is-multiline">
			    <Card
			    	class="column is-4-desktop is-half-tablet is-12-mobile"
			    	v-for="item in posts"
			    	:key="item.id"
			    	:link="item.link"
			      :icontype="item.icontype" 
			      :title="item.title"
			      :thumbnail="imageUrl(item.img) | thumbnail('medium')">
			    </Card>
				</div>
			</div>
	  </div>
	</div>
</template>

<style lang="scss" scoped>
	.is-visible {
		display: block !important;
	}
	.title svg {
		width: 30px;
		display: inline-block;
		vertical-align: middle;
		margin-top: -4px;
	}
	.subtitle {
		min-height: 25px;
	}
	.form {
		width: 100%;
	}
	.hero.class-cine {
		background-color: var(--lightblue);
		.title, p {
			color: #fff;
		}
	}
	.hero.class-radio {
		background-color: var(--darkblue);
		.title, p {
			color: #fff;
		}
	}
	.hero.class-tv {
		background-color: var(--beige);
		.title, p {
			color: #000;
		}
	}
	.hero.is-bold {
		box-shadow: inset 0 -170px 110px -90px rgba(0,0,0,0.1);
	}
	.nuxt-link-exact-active {
		border-bottom-color: var(--darkblue);
		color: var(--darkblue);
	}
	@media (max-width: 768px) {
		.hero .title {
			padding-bottom: 0;
			margin-bottom: 10px;
		}
		.hero p {
			font-size: 14px;
		}
		.tabs.is-centered-mobile ul {
    	justify-content: center;
		}
	}

	@media (max-width: 420px) {
		.tabs a {
			/*font-size: 11px;*/
		}
	}
	
</style>
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				loading: true,
				searching: false,
				api: 'https://admin.nseinternacional.org/public/nseinternacional',
				items: [],
				limit: 30,
				title: '',
				typeSelect: this.$route.params.type === undefined ? '' : this.$route.params.type,
				content1: `NSE Radio, desde 1994, bajo el amparo de la Virgen María, Nuestra Señora del Encuentro con Dios, continúa evangelizando a los oyentes del mundo de habla hispana según las enseñanzas de la Sagrada Escritura y la Tradición de la Iglesia Católica.
						Considera la radio como un instrumento informativo y formativo excelente para conocer la Verdad plena y amar el Bien sumo. Trabaja por ser portadora de la verdad: educar en la verdad, defender la verdad, fomentar la verdad.
						Tiene presencia en 7 países y cuenta con 10 estudios de grabación de radio y 7 emisoras.`,

			}
		},
		created(){
			this.getPosts()
		},
		methods: {
			getPosts() {
				this.items = []
				this.loading = true;
				axios.get(`${this.api}/items/audiovisuales?status=published&limit=${this.limit}${this.$route.params.type != undefined && `&filter[type]=${this.$route.params.type}`}`)
					.then(response => response.data.data.map(item => {
						const {id, title, type, image, link, sort} = item

						axios.get(`${this.api}/files/${image}?fields=private_hash`)
							.then(response => {
								const private_hash = response.data.data.private_hash
						
								this.items.push({
									id,
									title,
									icontype: type,
									link,
									sort,
									img: private_hash
								})
							})
							.finally(() => this.loading = false)
					}))
					.catch(error => console.log(error))
					.finally(() => this.loading = false)
			},
			imageUrl(value) {
				return `https://admin.nseinternacional.org/public/nseinternacional/assets/${value}`;
			},
			searchType() {
				this.$router.push(`/audiovisuales/${this.typeSelect}`)
			},
			isSearching() {
				this.searching = true
				setTimeout(() => this.searching = false, 1000);
      }
		},
		filters: {
			thumbnail(data, key="directus-medium-contain") {
				return `${data}?key=${key}`
			}
		},
		computed: {
			ordered() {
				return this.items.sort((a, b) => a.sort - b.sort)
			},
			posts() {
        return this.ordered.filter((item) => item.title.toLowerCase().includes(this.title.toLowerCase().trim()));
      },
      hasType() {
      	return this.$route.params.type === undefined ? false : true
      },
      getTypeClass() {
      	return `class-${this.$route.params.type}`
      },
      getType() {
      	return this.$route.params.type
      },
      getTitle() {
      	switch(this.getType) {
      		case 'cine':
      			return 'cine';
      			break;
      		case 'radio':
      			return 'radio';
      			break;
      		case 'tv':
      			return 'televisión';
      			break;
      		default:
      			return 'Audiovisuales';
      			break;
      	}
      }
		},
		watch:{
	    $route (to, from){
	      this.getPosts()
	      this.$route.params.type === undefined ? this.typeSelect = '' : this.typeSelect = this.$route.params.type
	    }
	  }
	}
</script>