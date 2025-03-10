import { createMemoryHistory, createRouter } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import ServicesView from "@/views/ServicesView.vue"
import ContactView from "@/views/ContactView.vue"

const routes = [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutView},
    {path: '/services', component: ServicesView},
    {path: '/contact', component: ContactView}, 
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router