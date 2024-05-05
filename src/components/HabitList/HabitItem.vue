<template>
  <div class="flex items-center justify-center gap-2">
    <div class="text-center font-medium capitalize">{{ data.name }}</div>
    <button
      class="rounded-md bg-red-500 p-1 text-xs text-text"
      type="button"
      @click="habits.remove(data.id)"
    >
      del
    </button>
  </div>
</template>

<script setup>
import useHabitsStore from '@/stores/habits';

const habits = useHabitsStore();

defineProps({
  data: {
    type: Object,
    default: () => {}
  }
});
</script>
