<script setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const switchTheme = useToggle(isDark);
</script>

<template>
  <button
    class="text-2xl"
    type="button"
    @click="switchTheme()"
    :title="isDark ? 'Toggle light mode' : 'Toggle dark mode'"
  >
    {{ isDark ? '🌞' : '🌚' }}
  </button>
</template>
