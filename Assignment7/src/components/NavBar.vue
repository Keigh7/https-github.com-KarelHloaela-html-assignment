<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
.nav {
  background: #f52a2a;
  padding: 10px;
  display: flex;
  gap: 15px;
}

.nav a {
  color: white;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>