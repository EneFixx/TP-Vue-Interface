<script setup>
import { ref } from 'vue'

const emit = defineEmits(['ajouter'])
const nom = ref('')
const prix = ref(null)
const description = ref('')

function soumettre() {
  if (!nom.value || !prix.value) return
  emit('ajouter', { nom: nom.value, prix: parseFloat(prix.value), description: description.value })
  nom.value = ''
  prix.value = null
  description.value = ''
}
</script>

<template>
  <form @submit.prevent="soumettre">
    <div><label>Nom :</label> <input v-model="nom" type="text" required /></div>
    <div><label>Prix (€) :</label> <input v-model="prix" type="number" step="0.01" required /></div>
    <div><label>Description :</label> <textarea v-model="description"></textarea></div>
    <button type="submit">Ajouter l'article</button>
  </form>
</template>