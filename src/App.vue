<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import ToastMessages from './components/ToastMessages/ToastMessages.vue';
</script>

<template>
  <div class="min-w-[270px] p-4">
    <AppHeader />
    <ToastMessages />

    <RouterView />
  </div>
</template>
