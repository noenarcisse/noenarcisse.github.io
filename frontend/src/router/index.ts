import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import ProjectPage from '@/pages/ProjectPage.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/project/:pathMatch(.*)*',
            name: 'project',
            component: ProjectPage
        }
    ]
})

export default router
