import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "page1" */ '../views/Page1.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "page2" */ '../views/Page2.vue')
    }
];

export default routes;
