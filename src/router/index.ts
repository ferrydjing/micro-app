import { RouteConfig } from 'vue-router';
import Page1 from '@/views/Page1.vue';
import Page2 from '@/views/Page2.vue';

const routes: Array<RouteConfig> = [
    {
        path: '/micro1Page1',
        name: 'Micro1Page1',
        component: () => import(/* webpackChunkName: "page1" */ '../views/Page1.vue')
    },
    {
        path: '/micro1Page2',
        name: 'Micro1Page2',
        component: () => import(/* webpackChunkName: "page2" */ '../views/Page2.vue')
    }
];

export default routes;
