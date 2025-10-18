<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav > a {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1.6rem;

    padding: 1.6rem 0;
    margin-top: 1.6rem;
  }
}
</style>
