<script setup>
import { useRoute } from 'vue-router';
import useHabitsStore from '@/stores/habits';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import HabitItem from '@/components/HabitList/HabitItem.vue';

const route = useRoute();
const { date } = route.params;

const habits = useHabitsStore();
const { list } = storeToRefs(habits);

const habitList = computed(() => {
  return list.value.filter((h) => {
    if (h.stoppedAt === null) return list.value;
    return new Date(h.stoppedAt).getTime() >= new Date(date).getTime();
  });
});
</script>

<template>
  <h2
    class="mt-10 text-2xl font-semibold text-center transition-all duration-300 ease-out text-text sm:text-3xl"
  >
    Tracked Habits
  </h2>
  <div class="text-sm font-medium text-center text-text sm:text-base">{{ date }}</div>
  <div
    v-if="habitList.length === 0"
    class="mt-4 text-base font-medium text-center text-text sm:text-xl"
  >
    There are no habits being tracked
  </div>
  <div
    v-else
    v-for="habit in habitList"
    :key="habit.id"
    class="flex flex-col items-center justify-center gap-2 mt-4 sm:flex-row"
  >
    <label class="sr-only" for="isCompleted" name="isCompleted">Is habit completed</label>
    <input
      class="w-4 h-4 bg-background accent-accent"
      type="checkbox"
      id="isCompleted"
      :checked="habit.completedAt[date]"
      @change="habits.update(habit.id, date, $event.target.checked)"
    />
    <HabitItem
      :data="habit"
      :is-completed="habit.completedAt[date]"
      :is-stoppable="true"
      :is-editable="false"
    />
  </div>
</template>
