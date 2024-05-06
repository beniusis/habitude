<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <DatePicker />
    <div class="flex flex-row flex-wrap items-center justify-center gap-2">
      <DayButton v-for="date in dates" :date="date" :key="date" />
    </div>
  </div>
</template>

<script setup>
import DatePicker from '../DatePicker.vue';
import DayButton from './DayButton.vue';

defineProps({
  dates: {
    type: Array,
    default: () => []
  }
});
</script>
