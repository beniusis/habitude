<template>
  <div class="flex flex-col items-center justify-center gap-2 sm:flex-row">
    <div
      class="text-center font-medium capitalize text-text"
      :class="{ 'line-through': isCompleted }"
    >
      {{ data.name }}
    </div>
    <div class="flex flex-row items-center justify-center gap-1">
      <button
        class="rounded-md bg-red-500 p-1 text-xs text-text"
        type="button"
        @click="habits.remove(data.id)"
      >
        del
      </button>
      <button
        v-if="isStoppable"
        class="rounded-md bg-orange-500 p-1 text-xs text-text"
        type="button"
        @click="habits.stop(data.id, $route.params.date)"
      >
        stop
      </button>
      <button v-if="isEditable" class="rounded-md bg-green-500 p-1 text-xs text-text" type="button">
        edit
      </button>
    </div>
  </div>
</template>

<script setup>
import useHabitsStore from '@/stores/habits';

const habits = useHabitsStore();

defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  isStoppable: {
    type: Boolean,
    default: false
  },
  isEditable: {
    type: Boolean,
    default: true
  }
});
</script>
