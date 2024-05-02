<template>
  <div class="flex flex-col items-center justify-center gap-5 mt-10">
    <ThemeSwitch />
    <h1
      class="text-5xl font-black tracking-widest text-center duration-300 ease-out select-none text-text hover:rotate-1 hover:scale-95 sm:text-6xl"
    >
      <a href="/" @click.prevent="$router.push('/')">habitude</a>
    </h1>
  </div>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import ThemeSwitch from './components/ThemeSwitch.vue';
</script>
