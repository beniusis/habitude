<script setup>
import { ref } from 'vue';
import HabitItem from './HabitItem.vue';
import PrimaryButton from '../PrimaryButton.vue';
import HabitModal from '../HabitModal.vue';

const openModal = ref(false);

defineProps({
  habits: {
    type: Array,
    default: () => []
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-5">
    <div v-if="habits.length > 0" class="flex flex-col items-center justify-center gap-4">
      <h2 class="text-center text-lg font-bold text-text duration-300 ease-in-out sm:text-2xl">
        Habit List - Daily Tracked Habits
      </h2>
      <div class="flex flex-col items-center justify-center gap-2">
        <HabitItem v-for="habit in habits" :data="habit" :key="habit.id" />
      </div>
    </div>
    <div v-else class="text-center text-xl text-primary duration-300 ease-in-out sm:text-3xl">
      Currently there are no habits in the list!
    </div>
  </div>
  <PrimaryButton @click="openModal = true">Add new habit</PrimaryButton>
  <HabitModal :is-open="openModal" @close-add="openModal = false" />
</template>
