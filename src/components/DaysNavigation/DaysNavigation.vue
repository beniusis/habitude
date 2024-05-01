<template>
  <div class="flex flex-row flex-wrap items-center justify-center gap-2 pt-10">
    <DayButton v-for="date in dates" :date="date" :key="date" />
  </div>
</template>

<script setup>
import DayButton from './DayButton.vue';

defineProps({
  dates: {
    type: Array,
    default: () => []
  }
});
</script>
