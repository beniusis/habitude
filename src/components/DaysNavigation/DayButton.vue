<template>
  <button
    :value="date"
    @click="$router.push(`/day/${date}`)"
    type="button"
    class="flex items-center justify-center w-10 h-10 text-xs font-medium rounded-full bg-primary text-text hover:bg-accent"
  >
    {{ toWeekDay(date) }}
  </button>
</template>

<script setup>
import { toWeekDay } from '@/lib/utils';

defineProps({
  date: {
    type: String,
    default: undefined
  }
});
</script>
