import { RouteConfig } from 'vue-router';
import Page1 from '@/views/Page1.vue';
import Page2 from '@/views/Page2.vue';

const routes: Array<RouteConfig> = [
    {
        path: '/page1',
        name: 'Micro1Page1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'Micro1Page2',
        component: Page2
    }
];

export default routes;
