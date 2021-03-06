import Vue from 'vue'
import Router from 'vue-router'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import EventCreate from './views/EventCreate.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'event-list',
			component: EventList
		},
		{
			path: '/event/:id', // dynamic route ( parameters in url)
			name: 'event-show',
			component: EventShow,
			props: true
		},
		{
			path: '/event/create',
			name: 'event-create',
			component: EventCreate
		}
		// {
		//   path: "/about",
		//   name: "about",
		//   // route level code-splitting
		//   // this generates a separate chunk (about.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () =>
		//     import(/* webpackChunkName: "about" */ "./views/About.vue")
		// }
	]
})
