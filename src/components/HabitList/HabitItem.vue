<template>
  <div class="flex flex-col items-center justify-center gap-2 sm:flex-row">
    <div
      class="text-sm font-medium text-center capitalize text-text sm:text-base"
      :class="{ 'line-through': isCompleted }"
    >
      {{ data.name }}
    </div>
    <div class="flex flex-row items-center justify-center gap-1">
      <button
        class="p-1 text-xs bg-red-500 rounded-md text-text"
        type="button"
        @click="habits.remove(data.id)"
      >
        del
      </button>
      <button
        v-if="isStoppable"
        class="p-1 text-xs bg-orange-500 rounded-md text-text"
        type="button"
        @click="habits.stop(data.id, $route.params.date)"
      >
        stop
      </button>
      <button v-if="isEditable" class="p-1 text-xs bg-green-500 rounded-md text-text" type="button">
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
