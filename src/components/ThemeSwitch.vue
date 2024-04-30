<template>
  <button class="text-2xl" type="button" @click="switchTheme()">
    {{ isDark ? '🌚' : '🌞' }}
  </button>
</template>

<script setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const switchTheme = useToggle(isDark);
</script>
