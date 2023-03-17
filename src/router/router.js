import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/HomePage.vue'),
	},
	{
		path: '/Home1',
		name: 'Home1',
		component: () => import('../views/HomePage1.vue'),
	},
	{
		path: '/Page1',
		name: 'Page1',
		component: () => import('../views/Page1.vue'),
	},
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
