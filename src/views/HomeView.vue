<script setup>
import { getLastSevenDaysDates } from '@/lib/utils';
import useHabitsStore from '@/stores/habits';
import { storeToRefs } from 'pinia';
import DaysNavigation from '@/components/DaysNavigation/DaysNavigation.vue';
import HabitList from '@/components/HabitList/HabitList.vue';

const habits = useHabitsStore();
const { list } = storeToRefs(habits);
</script>

<template>
  <main class="mt-10 flex flex-col items-center justify-center gap-10">
    <DaysNavigation :dates="getLastSevenDaysDates()" />
    <HabitList :habits="list" />
  </main>
</template>
