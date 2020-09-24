<template>
	<p>{{file}}</p>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				file: []
			}
		},
		created() {
			axios.get('http://admin.nseinternacional.org/public/nseinternacional/files/5')
				.then(response => {
					const ide = response.data.data.id
					this.file = ide
				})
		}
	}
</script>