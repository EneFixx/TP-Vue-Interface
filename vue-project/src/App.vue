<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/articles">Articles</router-link> |
    <router-link to="/ajouter">Ajouter</router-link> |
    <router-link to="/panier">Panier</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view />
</template>