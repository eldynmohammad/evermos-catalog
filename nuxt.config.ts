// https://v3.nuxtjs.org/api/configuration/nuxt.config
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";

export default defineNuxtConfig({
    generate: {
        fallback: true,
    },
    css: ["@/assets/css/main.css"],
    buildModules: [
        [
            "unplugin-icons/nuxt",
            {
                /* options */
            },
        ],
    ],
    vite: {
        plugins: [
            Components({
                resolvers: [IconsResolver()],
            }),
            Icons(),
        ],
    },
});
