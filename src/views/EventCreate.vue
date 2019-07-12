<template>
	<div>
		<h1>Create an Event, {{ $store.state.user.name }}</h1>
		<p>This event is created by {{ userName }} id: {{ user.id }}</p>
		<p>There are {{ catLength }} categories</p>
		<ul>
			<li v-for="cat in categories" :key="cat">{{ cat }}</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	computed: {
		catLength() {
			return this.$store.getters.catLength
		},
		...mapState({
			userName: state => state.user.name,
			user: 'user',
			categories: 'categories'
		})
	}
}
</script>

<style lang="scss" scoped></style>
