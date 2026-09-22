
<script setup>
import { ref, computed, watch } from 'vue'
import ArticleItem from './ArticleItem.vue'

const props = defineProps({
  articles: { type: Array, required: true },
  showDelete: { type: Boolean, default: false },
  parPage: { type: Number, default: 4 }
})
const emit = defineEmits(['ajouter-panier', 'supprimer'])

const pageActuelle = ref(1)

const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.articles.length / props.parPage))
)

const articlesAffiches = computed(() => {
  const debut = (pageActuelle.value - 1) * props.parPage
  return props.articles.slice(debut, debut + props.parPage)
})

// Si la liste reçue change (ex: nouvelle recherche), on revient page 1
watch(() => props.articles, () => { pageActuelle.value = 1 })

function pagePrecedente() { if (pageActuelle.value > 1) pageActuelle.value-- }
function pageSuivante() { if (pageActuelle.value < totalPages.value) pageActuelle.value++ }
</script>

<template>
  <div>
    <p v-if="articles.length === 0">Aucun article trouvé.</p>

    <ArticleItem
      v-for="article in articlesAffiches"
      :key="article.id"
      :article="article"
      :show-delete="showDelete"
      @ajouter-panier="$emit('ajouter-panier', $event)"
      @supprimer="$emit('supprimer', $event)"
    />

    <div v-if="articles.length > 0">
      <button @click="pagePrecedente" :disabled="pageActuelle === 1">Précédent</button>
      <span> Page {{ pageActuelle }} / {{ totalPages }} </span>
      <button @click="pageSuivante" :disabled="pageActuelle === totalPages">Suivant</button>
    </div>
  </div>
</template>