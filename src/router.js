import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import PostList from './pages/PostList.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContact from './pages/AppContact.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/blog',
name: 'posts',
component: PostList
},
{
    path: '/about',
    name: 'about',
    component: AppAbout
},
{
    path: '/contacts',
    name: 'contacts',
    component:  AppContact
},
]
});
export { router };