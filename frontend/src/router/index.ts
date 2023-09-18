import { createRouter, createWebHistory } from 'vue-router'
import Page from '../pages/Page.vue';
import Suggestions from '../pages/Suggestions.vue'

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: 'catchAll',
        component: Page,
    },{
        path:'/suggestions',
        name:'suggestions',
        component:Suggestions
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router