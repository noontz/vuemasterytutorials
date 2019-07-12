<template>
	<div>
		<h1>Create an Event, {{ $store.state.user.name }}</h1>
		<p>This event is created by {{ userName }} id: {{ user.id }}</p>
		<p>There are {{ catLength }} categories</p>
		<ul>
			<li v-for="cat in categories" :key="cat">{{ cat }}</li>
		</ul>
		<p>Finished todos</p>
		<ul>
			<li v-for="todo in doneTodos" :key="todo.id">{{ todo }}</li>
		</ul>
		<p>{{ getEventById(1) }}</p>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
	computed: {
		catLength() {
			return this.$store.getters.catLength
		},
		...mapState({
			userName: state => state.user.name,
			user: 'user',
			categories: 'categories'
		}),
		...mapGetters(['getEventById', 'doneTodos'])
	}
}
</script>

<style lang="scss" scoped></style>
