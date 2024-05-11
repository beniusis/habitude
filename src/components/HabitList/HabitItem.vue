<script setup>
import useHabitsStore from '@/stores/habits';
import useToastStore from '@/stores/toast';
import { ref } from 'vue';
import HabitModal from '../HabitModal.vue';

const habits = useHabitsStore();
const toast = useToastStore();

const openModal = ref(false);

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

<template>
  <div class="flex flex-col items-center justify-center gap-2 sm:flex-row">
    <div
      class="text-center text-sm font-medium capitalize text-text sm:text-base"
      :class="{ 'line-through': isCompleted }"
    >
      {{ data.name }}
    </div>
    <div class="flex flex-row items-center justify-center gap-1">
      <button
        class="rounded-md bg-red-500 p-1 text-xs text-text"
        type="button"
        @click="
          () => {
            habits.remove(data.id);
            toast.success('Habit removed!');
          }
        "
      >
        del
      </button>
      <button
        v-if="isStoppable"
        class="rounded-md bg-orange-500 p-1 text-xs text-text"
        type="button"
        @click="
          () => {
            habits.stop(data.id, $route.params.date);
            toast.success(`Habit stopped from ${$route.params.date}!`);
          }
        "
      >
        stop
      </button>
      <button
        v-if="isEditable"
        class="rounded-md bg-green-500 p-1 text-xs text-text"
        type="button"
        @click="openModal = true"
      >
        edit
      </button>
    </div>
  </div>
  <HabitModal :data="data" :is-open="openModal" :type="'edit'" @close-edit="openModal = false" />
</template>
