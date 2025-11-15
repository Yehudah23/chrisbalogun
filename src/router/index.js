import AboutMe from '../components/AboutMe.vue';
import HomeView from '../views/Home.vue';
import LogIn from '../components/LogIn.vue';
import MyCv from '../components/MyCv.vue';
import MyPublications from '../components/MyPublications.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AdminView from '../views/Admin.vue';






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
        component: AboutMe,
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
        meta: { requiresAdmin: true },
        beforeEnter: (to, from, next) => {
            const raw = localStorage.getItem('laraveluser');
            
            // Redirect to login if not authenticated
            if (!raw) {
                return next({ name: 'login' });
            }
            
            let user = null;
            try { 
                user = JSON.parse(raw); 
            } catch(e) { 
                // Invalid token, clear it and redirect
                localStorage.removeItem('laraveluser');
                return next({ name: 'login' });
            }
            
            // Check if user is admin
            const isAdmin = user && (
                user.is_admin === 1 || 
                user.is_admin === true || 
                user.isAdmin === true || 
                user.admin === 1 || 
                user.admin === true || 
                user.role === 'admin' || 
                user.type === 'admin'
            );
            
            // Redirect non-admin users
            if (!isAdmin) {
                console.warn('Access denied: User is not an administrator');
                return next({ name: 'login' });
            }
            
            // Allow access for admin users
            return next();
        }
    }
];



const router = createRouter({
    history: createWebHistory(),
    routes
});

// Global navigation guard
router.beforeEach((to, from, next) => {
    const raw = localStorage.getItem('laraveluser');
    let user = null;
    
    if (raw) {
        try {
            user = JSON.parse(raw);
        } catch(e) {
            localStorage.removeItem('laraveluser');
        }
    }
    
    // Check if user is admin
    const isAdmin = user && (
        user.is_admin === 1 || 
        user.is_admin === true || 
        user.isAdmin === true || 
        user.admin === 1 || 
        user.admin === true || 
        user.role === 'admin' || 
        user.type === 'admin'
    );
    
    // If logged in admin tries to access login page, redirect to admin
    if (to.meta.requiresGuest && isAdmin) {
        return next({ name: 'admin' });
    }
    
    next();
});

export default router;