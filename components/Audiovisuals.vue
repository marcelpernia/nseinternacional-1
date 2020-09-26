<template>
	<div class="columns is-mobile is-multiline">
    <Card
    	v-for="item in items"
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
		data() {
			return {
				api: 'https://admin.nseinternacional.org/public/nseinternacional',
				items: [],
				limit: 3,
				fields: [
					'id',
					'title',
					'type',
					'image',
					'link'
				]
			}
		},
		async created() {
			try {
				await axios.get(`${this.api}/items/audiovisuales?status=published&fields=${this.fields}&limit=${this.limit}`)
					.then(response => response.data.data.map(item => {
						const {id, title, type, image, link} = item

						axios.get(`${this.api}/files/${image}`)
							.then(response => {
								const assetUrl = response.data.data.data.asset_url
						
								this.items.push({
									id,
									title,
									icontype: type,
									link,
									img: assetUrl
								})
							})

					}))
			} catch (error) {
				console.log(error)
			}
		},
		methods: {
			imageUrl(value) {
				return `https://admin.nseinternacional.org${value}`;
			}
		},
		filters: {
			thumbnail(data, key="directus-medium-contain") {
				return `${data}?key=${key}`
			}
		}
	}
</script>