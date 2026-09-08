import AboutMe from '../components/AboutMe.vue';
import HomeView from '../views/Home.vue';
import LogIn from '../components/LogIn.vue';
import MyCv from '../components/MyCv.vue';
import MyPublications from '../components/MyPublications.vue';
import ContactMe from '../components/ContactMe.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AdminView from '../views/Admin.vue';
import { authReady, currentUser, isAdmin } from '../services/firebase';






const routes = [
    {
        path: '/',
        component: HomeView,
        name: 'Home'
    },
    {
        path: '/about',
        component: AboutMe,
        name: 'about'
    },
    {
        path: '/contact',
        component: ContactMe,
        name: 'contact'
    },
    {
        path: '/login',
        component: LogIn,
        name: 'login',
        meta: { requiresGuest: true }
    },
    {
        path: '/cv',
        component: MyCv,
        name: 'cv'
    },
    {
        path: '/publications',
        component: MyPublications,
        name: 'publications'
    }
    ,{
        path: '/admin',
        component: AdminView,
        name: 'admin',
        meta: { requiresAdmin: true }
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    if (!to.meta.requiresAdmin) {
        return next();
    }

    await authReady;
    const user = currentUser();
    const admin = user && await isAdmin(user);

    if (!user || !admin) {
        return next({ name: 'login' });
    }
    next();
});

export default router;