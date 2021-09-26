import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import App from './App.vue';
import './registerServiceWorker';
import routes from './router';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(VueRouter);

interface IProps {
    name: string;
    routerBase: string;
    mainRouter: VueRouter;
    mainStore: any;
    singleSpa: any;
    container: any;
    mountParcel(): any;
    setGlobalState(): any;
    onGlobalStateChange(): any;
}

let instance: Vue | null = null;

function render(props: IProps) {
    const { container, routerBase, mainRouter, mainStore } = props;
    const router = new VueRouter({
        base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
        mode: 'history',
        routes: routes as unknown as RouteConfig[]
    });
    instance = new Vue({
        router,
        render: (h) => h(App)
    }).$mount(container.querySelector('#micro-app'));
    // 通过主应用的 $mainRouter 实现跨应用跳转
    // $mainStore 主应用的全局store
    Vue.prototype.$mainRouter = mainRouter;
    Vue.prototype.$mainStore = mainStore;
    window.$mainStore = mainStore;
    window.$mainRouter = mainRouter;
}

// 子项目提供的三个钩子函数
export async function mount(props: IProps): Promise<void> {
    render(props);
}

// eslint-disable-next-line
export async function bootstrap(): Promise<void> {}
export async function unmount(): Promise<void> {
    if (!instance) return;
    instance.$destroy();
    instance.$el.innerHTML = '';
    instance = null;
}

// 独立访问时，跳转到主应用
if (!window.__POWERED_BY_QIANKUN__) {
    window.location.href = process.env.VUE_APP_PACKAGE_URL;
}
