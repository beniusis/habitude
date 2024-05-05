<template>
  <div class="flex flex-col items-center justify-center gap-3">
    <label class="sr-only" for="habit-name">Habit name</label>
    <input
      class="max-w-96 rounded-md bg-secondary px-4 py-2 text-sm text-text outline-none placeholder:text-text"
      type="text"
      id="habit-name"
      placeholder="Enter the name of a habit"
      v-model="habitName"
    />
    <button
      class="rounded-md bg-primary px-4 py-2 text-sm text-text duration-300 ease-out hover:bg-accent active:scale-95 disabled:hover:bg-primary disabled:active:scale-100"
      type="button"
      :disabled="habitName.length === 0"
      @click="habits.add(habitName)"
    >
      Add new habit
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useHabitsStore from '@/stores/habits';

const habitName = ref('');
const habits = useHabitsStore();
</script>
