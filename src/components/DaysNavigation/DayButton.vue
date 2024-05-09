<template>
  <div class="flex flex-col items-center justify-center gap-1">
    <div class="select-none text-xs text-text">
      {{ getMonthAndDay(date) }}
    </div>
    <button
      class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-semibold text-text duration-300 ease-in-out hover:scale-105 hover:bg-accent disabled:hover:scale-100 disabled:hover:bg-primary"
      type="button"
      :value="date"
      :disabled="isDayDisabled(date)"
      @click="$router.push(`/day/${date}`)"
    >
      {{ toWeekDay(date) }}
    </button>
  </div>
</template>

<script setup>
import { getMonthAndDay, isDayDisabled, toWeekDay } from '@/lib/utils';

defineProps({
  date: {
    type: String,
    default: undefined
  }
});
</script>
