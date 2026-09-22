<script setup>
defineProps({ articles: { type: Array, required: true } })
defineEmits(['retirer'])
</script>

<template>
  <div>
    <p v-if="articles.length === 0">Votre panier est vide.</p>
    <ul v-else>
      <li v-for="(article, index) in articles" :key="index">
        {{ article.nom }} — {{ article.prix.toFixed(2) }} €
        <button @click="$emit('retirer', index)">Retirer</button>
      </li>
    </ul>
    <p v-if="articles.length > 0">
      Total : {{ articles.reduce((s, a) => s + a.prix, 0).toFixed(2) }} €
    </p>
  </div>
</template>