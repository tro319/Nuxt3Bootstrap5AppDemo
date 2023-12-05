// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        // baseURL: '/Nuxt3Bootstrap5AppDemo/', // baseURL: '/<repository>/'
        head: {
            title: '上賀茂飲食店巡り',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            script: [
            ],
            link: [
                { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" }
            ]
        }
    },
    modules: [
        '@vueuse/nuxt',
        '@nuxt/content',
        'usebootstrap',
        'nuxt-icon'
    ],
    css: [
        "assets/scss/default.scss"
    ]
})
