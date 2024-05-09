<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <div v-if="habits.length > 0" class="flex flex-col items-center justify-center gap-4">
      <h2 class="text-2xl font-bold">Habit List Items</h2>
      <div class="flex flex-col items-center justify-center gap-2">
        <HabitItem v-for="habit in habits" :data="habit" :key="habit.id" />
      </div>
    </div>
    <div v-else class="text-center text-xl text-primary duration-300 ease-in-out sm:text-3xl">
      Currently there are no habits in the list!
    </div>
  </div>
</template>

<script setup>
import HabitItem from './HabitItem.vue';

defineProps({
  habits: {
    type: Array,
    default: () => []
  }
});
</script>
