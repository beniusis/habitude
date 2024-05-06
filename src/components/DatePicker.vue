<template>
  <div class="flex items-center justify-center gap-2">
    <label class="sr-only" for="date-picker">Pick a date</label>
    <input
      :class="[
        { dark: isDark },
        'rounded-md bg-primary p-2 text-xs font-semibold text-text outline-none duration-300 ease-in-out sm:text-sm'
      ]"
      type="date"
      id="date-picker"
      :max="getCurrentFormattedDate()"
      v-model="selectedDate"
    />
    <PrimaryButton :disabled="selectedDate === ''" @click="$router.push(`/day/${selectedDate}`)"
      >Go</PrimaryButton
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getCurrentFormattedDate } from '@/lib/utils';
import { useDark } from '@vueuse/core';
import PrimaryButton from './PrimaryButton.vue';

const selectedDate = ref('');
const isDark = useDark();
</script>

<style scoped>
input[type='date']::-webkit-calendar-picker-indicator {
  width: 1rem;
  height: 1rem;
}

.dark input[type='date']::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>
