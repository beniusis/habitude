<template>
  <main class="flex flex-col items-center justify-center gap-10 px-5">
    <DaysNavigation :dates="getCurrentWeekDates()" />
  </main>
</template>

<script setup>
import { getCurrentWeekDates } from '@/lib/utils';
import DaysNavigation from '@/components/DaysNavigation/DaysNavigation.vue';
</script>
