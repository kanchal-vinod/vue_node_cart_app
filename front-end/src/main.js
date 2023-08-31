import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as vueRouter from 'vue-router'
import ProductPage from './pages/ProductPage.vue'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductDetails from './pages/ProductDetails.vue'
import PageNotFoundPage from '@/pages/PageNotFoundPage'


createApp(App)
  .use(vueRouter.createRouter({
    history: vueRouter.createWebHistory(process.env.BAS_URL),
    routes: [{
      path: '/products',
      component: ProductPage
    },
    {
      path: '/shoppingcart',
      component: ShoppingCartPage
    },
      {
        path: '/products/:productId',
        component: ProductDetails
      },
      {
        path:'/:PathMatch/(.*)*',
        component:PageNotFoundPage,
      },
  ]
  }))
  .mount('#app')
