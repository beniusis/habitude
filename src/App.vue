<template>
  <div class="min-w-[270px]">
    <AppHeader />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>
