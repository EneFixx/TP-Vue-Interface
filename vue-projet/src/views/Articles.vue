<script setup>
import { ref, computed } from 'vue'
import { store, ajouterAuPanier } from '../store'
import BarreRecherche from '../components/BarreRecherche.vue'
import ListeArticles from '../components/ListeArticles.vue'

const recherche = ref('')

const articlesFiltres = computed(() => {
  const q = recherche.value.toLowerCase()
  return store.articles.filter(a => a.nom.toLowerCase().includes(q))
})
</script>

<template>
  <div>
    <h1>Nos articles</h1>
    <BarreRecherche v-model="recherche" />
    <ListeArticles :articles="articlesFiltres" @ajouter-panier="ajouterAuPanier" />
  </div>
</template>