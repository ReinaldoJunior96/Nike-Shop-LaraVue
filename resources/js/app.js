/*require('./bootstrap');*/

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { createStore } from 'vuex'

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(store)
            .mount(el)
    },
})

const store = createStore({
    state: {
        carrinho: [],
        produtos: [
            {
                photo:
                    "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-dunk-low-retro-DD1391-600-1-11624383736.jpg",
                produto: "Nike SB Dun Low Pro",
                preco: 640,
            },
            {
                photo:
                    "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-dunk-low-pro-unissex-BQ6817-010-1-11632839318.jpg",
                produto: "Nike SB Dunk Low Pro",
                preco: 900,
            },
            {
                photo:
                    "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-sb-dunk-low-pro-BQ6817-101-1-11624978768.jpg",
                produto: "Nike SB Dunk Low 'Laser Blue'",
                preco: 950,
            },
        ],
    },
    mutations: {
        addToCart(context, payload) {
            this.state.carrinho.push(payload)
        },
        removeToCart(context, payload) {
            console.log(payload)
        },
        
    },
    actions: {

    },

    modules: {

    }
})
