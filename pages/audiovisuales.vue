<template>
	<div class="section">
		<div class="container">	
			<div class="has-text-centered">
				<h2 class="title is-4">Audiovisuales</h2>
				<h3 class="subtitle is-capitalized pb-2">{{type}}</h3>
			</div>
			<div class="level">
				<div class="level-left">
					<div class="level-item">
						<input class="input" type="text" placeholder="Buscar por título" v-model="title">
					</div>
					<div class="level-item">
						<form action="" class="form">
							<div class="field has-addons is-expanded">
							  <div class="control is-expanded">
							    <span class="select is-fullwidth">
							      <select name="type" v-model="typeSelect">
							      	<option value="">Todo</option>
							        <option value="cine">Cine</option>
							        <option value="radio">Radio</option>
							        <option value="tv">Tv</option>
							      </select>
							    </span>
							  </div>
							  <div class="control">
							    <button class="button is-link" :class="{'is-loading': loading}">Buscar</button>
							  </div>
							</div>
						</form>
					</div>
				</div>
			</div>
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
		      :thumbnail="item.img | thumbnail('medium')">
		    </Card>
			</div>
		</div>
  </div>
</template>

<style>
	.is-visible {
		display: block !important;
	}
	.title:first-letter {
		text-transform: uppercase !important;
	}
	.subtitle {
		min-height: 25px;
	}
	.form {
		width: 100%;
	}
</style>
<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				loading: true,
				api: 'https://admin.nseinternacional.org/public/nseinternacional',
				items: [],
				limit: 30,
				title: '',
				type: this.$route.query.type,
				typeSelect: this.$route.query.type == undefined ? '' : this.$route.query.type
			}
		},
		mounted(){
			this.loading = true;
			axios.get(`${this.api}/items/audiovisuales?status=published&limit=${this.limit}${this.type != undefined && this.type != '' ? `&filter[type]=${this.type}` : null}`)
				.then(response => response.data.data.map(item => {
					const {id, title, type, image, link, sort} = item

					axios.get(`${this.api}/files/${image}`)
						.then(response => {
							const assetUrl = response.data.data.data.asset_url
					
							this.items.push({
								id,
								title,
								icontype: type,
								link,
								sort,
								img: `https://admin.nseinternacional.org${assetUrl}`
							})
						})
						.finally(() => this.loading = false)
				}))
				.catch(error => console.log(error))
				.finally(() => this.loading = false)
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
        return this.ordered.filter((item) => item.title.toLowerCase().includes(this.title.toLowerCase()));
      }
		}
	}
</script>