import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "LSP APP v4.5 SMKN 1 MOJOKERTO" },
        ],
        link: []
    },

    css: [
        '~/assets/sass/app.scss',
        '~/assets/sass/vendor.scss',
    ],

    plugins: [
        '~/plugins/icon.client.ts',
    ],

    build: {
        transpile: [
            '@headlessui/vue',
        ],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        }
    },

    buildModules: [
        '@nuxtjs/svg',
    ]
})
