
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store, ajouterAuPanier } from '../store'

const route = useRoute()
const article = computed(() => store.articles.find(a => a.id === Number(route.params.id)))
</script>

<template>
  <div v-if="article">
    <h1>{{ article.nom }}</h1>
    <p>{{ article.description }}</p>
    <p><strong>{{ article.prix.toFixed(2) }} €</strong></p>
    <button @click="ajouterAuPanier(article)">Ajouter au panier</button>
    <router-link to="/articles">Retour à la liste</router-link>
  </div>
  <div v-else>
    <p>Article introuvable.</p>
    <router-link to="/articles">Retour à la liste</router-link>
  </div>
</template>