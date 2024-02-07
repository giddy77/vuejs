import { createApp } from 'vue'
import App from './App.vue'


import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import UserList from './components/UserList'

const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component:AboutPage},
    {path: '/users/:id', component:UserList}
]


const app =  createApp(App); 

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
app.use(router);
app.mount('#app');
