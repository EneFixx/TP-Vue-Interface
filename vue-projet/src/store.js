// src/store.js
import { reactive } from 'vue'

export const store = reactive({
  articles: [
    { id: 1, nom: 'Maillot PSG Domicile 24/25', prix: 89.99, description: 'Maillot officiel domicile du Paris Saint-Germain, saison 2024/2025.' },
    { id: 2, nom: 'Maillot Real Madrid Extérieur', prix: 84.99, description: 'Maillot extérieur du Real Madrid, coupe ajustée.' },
    { id: 3, nom: 'Maillot FC Barcelone Domicile', prix: 89.99, description: 'Maillot domicile barca' },
    { id: 4, nom: 'Maillot Manchester City', prix: 79.99, description: 'blabla' },
    { id: 5, nom: 'Maillot Bayern Munich', prix: 84.99, description: 'blabla2' },
    { id: 6, nom: 'Short d\'entraînement Nike', prix: 24.99, description: 'blabla3' },
    { id: 7, nom: 'Short Adidas Climacool', prix: 22.5, description: 'blabla4' },
    { id: 8, nom: 'Crampons Nike Mercurial', prix: 129.99, description: 'blabla5' },
    { id: 9, nom: 'Crampons Adidas Predator', prix: 139.99, description: 'blabla6' },
    { id: 10, nom: 'Ballon de match taille 5', prix: 34.99, description: 'blabla7' },
    { id: 11, nom: 'Gants de gardien Puma', prix: 29.99, description: 'blabla8' },
    { id: 12, nom: 'Sac de sport 45L', prix: 39.9, description: 'blabla9' }
  ],
  panier: [],
  isLoggedIn: false
})

let prochainId = 13

export function ajouterArticle(article) {
  store.articles.push({ id: prochainId++, ...article })
}

export function supprimerArticle(id) {
  store.articles = store.articles.filter(a => a.id !== id)
}

export function ajouterAuPanier(article) {
  store.panier.push(article)
}

export function retirerDuPanier(index) {
  store.panier.splice(index, 1)
}

export function login() { store.isLoggedIn = true }
export function logout() { store.isLoggedIn = false }