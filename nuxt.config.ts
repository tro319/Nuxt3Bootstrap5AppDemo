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
                { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" }
            ],
            link: [
                { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" },
                { rel: 'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1/font/bootstrap-icons.min.css" },
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
