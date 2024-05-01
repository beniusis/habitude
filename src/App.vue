<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <ThemeSwitch class="pt-10" />
    <h1
      class="px-10 text-5xl font-black tracking-widest text-center duration-300 ease-out select-none text-text sm:text-6xl"
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
