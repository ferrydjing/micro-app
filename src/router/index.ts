import { RouteConfig } from 'vue-router';
import Page1 from '@/views/Page1.vue';
import Page2 from '@/views/Page2.vue';

const routes: Array<RouteConfig> = [
    {
        path: '/micro1Page1',
        name: 'Micro1Page1',
        component: Page1
    },
    {
        path: '/micro1Page2',
        name: 'Micro1Page2',
        component: Page2
    }
];

export default routes;
