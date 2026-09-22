
<script setup>
import { store, retirerDuPanier } from '../store'
import Panier from '../components/Panier.vue'
</script>

<template>
  <div>
    <h1>Mon panier</h1>
    <Panier :articles="store.panier" @retirer="retirerDuPanier" />
  </div>
</template>