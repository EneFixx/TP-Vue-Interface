
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../store'

const router = useRouter()
const identifiant = ref('')
const motDePasse = ref('')

function seConnecter() {
  // Pas de vraie authentification : remplir les deux champs suffit (cf. consigne)
  if (identifiant.value && motDePasse.value) {
    login()
    router.push('/admin')
  }
}
</script>

<template>
  <div>
    <h1>Connexion</h1>
    <form @submit.prevent="seConnecter">
      <div><label>Identifiant :</label> <input v-model="identifiant" type="text" required /></div>
      <div><label>Mot de passe :</label> <input v-model="motDePasse" type="password" required /></div>
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>