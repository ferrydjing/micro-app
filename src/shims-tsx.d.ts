import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        // tslint:disable no-empty-interface
        interface Element extends VNode {}
        // tslint:disable no-empty-interface
        interface ElementClass extends Vue {}
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }

    interface Window {
        __POWERED_BY_QIANKUN__: string;
        _INJECTED_PUBLIC_PATH_BY_QIANKUN__: string;
        $mainStore: Store;
        $mainRouter: VueRouter;
    }
}