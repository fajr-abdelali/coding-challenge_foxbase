import { createRouter, createWebHistory } from 'vue-router'
import Page from '../pages/Page.vue'
const routes = [
    {
        path: '/',
        name: 'start',
        component: Page,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router