
<script setup>
import { store, supprimerArticle, logout } from '../store'
import { useRouter } from 'vue-router'
import ListeArticles from '../components/ListeArticles.vue'

const router = useRouter()

function seDeconnecter() {
  logout()
  router.push('/')
}
</script>

<template>
  <div>
    <h1>Administration</h1>
    <button @click="seDeconnecter">Se déconnecter</button>
    <ListeArticles :articles="store.articles" :show-delete="true" :par-page="10" @supprimer="supprimerArticle" />
  </div>
</template>