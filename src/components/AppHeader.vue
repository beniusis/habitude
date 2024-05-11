<template>
  <header class="mt-10 flex flex-col items-center justify-center gap-5">
    <ThemeSwitch />
    <h1
      class="select-none text-center text-5xl font-black tracking-widest text-text duration-300 ease-out hover:rotate-1 hover:scale-95 sm:text-6xl"
    >
      <a href="/" @click.prevent="$router.push('/')">habitude</a>
    </h1>
  </header>
</template>

<script setup>
import ThemeSwitch from './ThemeSwitch.vue';
</script>
