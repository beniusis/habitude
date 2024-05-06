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
    <PrimaryButton :disabled="habitName.length === 0" @click="habits.add(habitName)"
      >Add new habit</PrimaryButton
    >
  </div>
</template>

<script setup>
import { ref } from 'vue';
import useHabitsStore from '@/stores/habits';
import PrimaryButton from './PrimaryButton.vue';

const habitName = ref('');
const habits = useHabitsStore();
</script>
