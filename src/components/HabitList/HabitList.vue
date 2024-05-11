<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <div v-if="habits.length > 0" class="flex flex-col items-center justify-center gap-4">
      <h2 class="text-lg font-bold text-center duration-300 ease-in-out text-text sm:text-2xl">
        Habit List - Daily Tracked Habits
      </h2>
      <div class="flex flex-col items-center justify-center gap-2">
        <HabitItem v-for="habit in habits" :data="habit" :key="habit.id" />
      </div>
    </div>
    <div v-else class="text-xl text-center duration-300 ease-in-out text-primary sm:text-3xl">
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
