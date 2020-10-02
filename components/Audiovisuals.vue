<template>
	<div class="columns is-mobile is-multiline">
    <Card
    	class="column is-half-tablet is-half-mobile"
    	:class="grid"
    	v-for="item in itemsOrdenados"
    	:key="item.id"
    	:link="item.link"
      :icontype="item.icontype" 
      :title="item.title"
      :thumbnail="imageUrl(item.img) | thumbnail('medium')">
    </Card>
  </div>
</template>

<script>
	import axios from 'axios';
	export default {
		props: {
			grid: String,
			limit: {
				type: Number,
				default: 1
			},
			section: {
				type: String,
				required: true,
				default: 'destacado'
			}
		},
		data() {
			return {
				api: 'https://admin.nseinternacional.org/public/nseinternacional',
				items: []
			}
		},
		async created() {
			try {
				await axios.get(`${this.api}/items/audiovisuales?status=published&limit=${this.limit}&filter[section]=${this.section}`)
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

					}))
			} catch (error) {
				console.log(error)
			}
		},
		methods: {
			imageUrl(value) {
				return `https://admin.nseinternacional.org/public/nseinternacional/assets/${value}`;
			}
		},
		filters: {
			thumbnail(data, key="directus-medium-contain") {
				return `${data}?key=${key}`
			}
		},
		computed: {
			itemsOrdenados() {
				return this.items.sort((a, b) => a.sort - b.sort)
			}
		}
	}
</script>