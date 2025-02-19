import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import GroupView from '@/views/GroupView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/groups',
            component: GroupView,
        },
    ]
});

router.beforeEach(async (to, from, next) => {
    console.log("router before each");
    next(); // Allow navigation if authenticated
});

export default router;
