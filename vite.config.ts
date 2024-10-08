import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/welcome-to-my-website/',
    plugins: [vue()],
    // 配置@
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
