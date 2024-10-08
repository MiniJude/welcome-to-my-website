import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        // name: "home",
        // component: () => import("@/demo/index.vue"),
        redirect: "/demo/canvas",
    },
    {
        path: "/demo/canvas",
        name: "demo-canvas",
        component: () => import("@/demo/canvas/index.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;