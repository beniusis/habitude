<template>
  <button
    class="flex items-center justify-center w-10 h-10 text-xs font-semibold duration-300 ease-in-out rounded-full bg-primary text-text hover:scale-105 hover:bg-accent disabled:hover:scale-100 disabled:hover:bg-primary"
    type="button"
    :value="date"
    :disabled="isDayDisabled(date)"
    @click="$router.push(`/day/${date}`)"
  >
    {{ toWeekDay(date) }}
  </button>
</template>

<script setup>
import { isDayDisabled, toWeekDay } from '@/lib/utils';

defineProps({
  date: {
    type: String,
    default: undefined
  }
});
</script>
