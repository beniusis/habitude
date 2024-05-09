<script setup>
import { ref } from 'vue';
import useHabitsStore from '@/stores/habits';
import PrimaryButton from './PrimaryButton.vue';

const show = ref(false);
const habitName = ref('');
const { add } = useHabitsStore();

const addHabit = () => {
  add(habitName.value);
  show.value = false;
  habitName.value = '';
};
</script>

<template>
  <PrimaryButton @click="show = true">Add new habit</PrimaryButton>
  <div class="fixed inset-0 h-screen w-full bg-gray-500 bg-opacity-75" v-show="show">
    <div class="flex min-h-full items-center justify-center p-4 text-center">
      <div
        class="relative flex flex-col items-center justify-center gap-3 rounded-lg bg-background p-10"
      >
        <svg
          class="absolute right-2 top-2 cursor-pointer fill-text"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          @mousedown="show = false"
        >
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
          ></path>
        </svg>
        <label class="sr-only" for="habit-name">Habit name</label>
        <input
          class="mt-4 w-full rounded-md bg-secondary px-4 py-2 text-xs text-text outline-none transition-all duration-300 ease-out placeholder:text-text sm:text-sm"
          type="text"
          id="habit-name"
          placeholder="Enter the name of a habit"
          v-model="habitName"
        />
        <PrimaryButton class="w-full" :disabled="habitName.length === 0" @click="addHabit"
          >Add</PrimaryButton
        >
      </div>
    </div>
  </div>
</template>
