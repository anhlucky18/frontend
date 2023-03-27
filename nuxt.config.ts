// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
    routeRules: {
        '/': { ssr: true  },
      },
    css: ["@/assets/styles/main.css","@/assets/vendor/swiper/swiper-bundle.min.css","@/assets/vendor/aos/aos.css","@/assets/vendor/glightbox/css/glightbox.min.css"],
    script: [,
    
    ],
    components: {
        dirs: [
            '~/components',
        ]
    },
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" ,integrity:"sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65", crossorigin: 'anonymous' },
                {rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"},
                {rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/css/glightbox.min.css",}
                
                
            ],
            script: [
                { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", integrity:"sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4", crossorigin: 'anonymous' },
                { src:'_nuxt/assets/vendor/swiper/swiper-bundle.min.js'},
                { src:'_nuxt/assets/vendor/glightbox/js/glightbox.js'},
                { src:'_nuxt/assets/vendor/aos/aos.js'},
                { src: "_nuxt/assets/main.js"}
                
            ]
        },
    },
    server: {
        port: "3001"
      },

})
