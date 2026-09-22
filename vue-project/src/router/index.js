
import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store.js'

import Accueil from '../views/Accueil.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Ajouter from '../views/Ajouter.vue'
import PanierPage from '../views/PanierPage.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'accueil', component: Accueil },
    { path: '/articles', name: 'articles', component: Articles },
    { path: '/article/:id', name: 'article-detail', component: ArticleDetail },
    { path: '/ajouter', name: 'ajouter', component: Ajouter },
    { path: '/panier', name: 'panier', component: PanierPage },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (!store.isLoggedIn) {
          next('/login')
        } else {
          next()
        }
      }
    }
  ]
})

export default router