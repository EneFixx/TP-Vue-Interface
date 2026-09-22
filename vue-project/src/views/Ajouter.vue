
<script setup>
import { useRouter } from 'vue-router'
import { ajouterArticle } from '../store'
import FormulaireArticle from '../components/FormulaireArticle.vue'

const router = useRouter()

function onAjouter(article) {
  ajouterArticle(article)
  router.push('/articles')
}
</script>

<template>
  <div>
    <h1>Ajouter un article</h1>
    <FormulaireArticle @ajouter="onAjouter" />
  </div>
</template>