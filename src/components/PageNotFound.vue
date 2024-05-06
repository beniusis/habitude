<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <main
    class="absolute top-1/2 flex w-full -translate-y-1/2 select-none flex-col items-center justify-center"
  >
    <h1 class="text-9xl font-black tracking-widest text-text">404</h1>
    <div class="absolute rotate-12 rounded bg-primary px-2 text-sm">Page Not Found</div>
    <RouterLink
      to="/"
      class="mt-4 rounded-md bg-primary px-8 py-3 text-sm font-semibold duration-500 ease-out hover:bg-secondary"
      >Go Home</RouterLink
    >
  </main>
</template>
