<script setup>
defineProps({
  article: { type: Object, required: true },
  showDelete: { type: Boolean, default: false }
})
defineEmits(['ajouter-panier', 'supprimer'])
</script>

<template>
  <div class="carte-article">
    <h3>{{ article.nom }}</h3>
    <p>{{ article.prix.toFixed(2) }} €</p>
    <router-link :to="`/article/${article.id}`">Voir détails</router-link>
    <button @click="$emit('ajouter-panier', article)">Ajouter au panier</button>
    <button v-if="showDelete" @click="$emit('supprimer', article.id)">Supprimer</button>
  </div>
</template>

<style scoped>
.carte-article {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.5rem;
}
</style>