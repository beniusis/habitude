<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full h-screen select-none">
    <h1 class="font-extrabold tracking-widest text-text text-9xl">404</h1>
    <div class="absolute px-2 text-sm rounded bg-primary rotate-12">Page Not Found</div>
    <RouterLink
      to="/"
      class="px-8 py-3 mt-4 text-sm font-medium duration-500 ease-out rounded-md bg-primary hover:bg-secondary"
      >Go Home</RouterLink
    >
  </main>
</template>
