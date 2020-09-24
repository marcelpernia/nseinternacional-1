<template>
	<ul>
		<li v-for="user in users">({{user.id}}) {{user.title}}</li>
	</ul>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				users: []
			}
		},
		async created() {
			try {
				await axios.get('http://admin.nseinternacional.org/public/nseinternacional/items/slider')
					.then(response => response.data.data.map(item => {
						const {id, title} = item
						this.users.push({
							id,
							title
						})
					}))
			} catch {
				console.log(error)
			}
		}
	}
</script>