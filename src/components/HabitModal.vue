<script setup>
import { ref } from 'vue';
import useHabitsStore from '@/stores/habits';
import useToastStore from '@/stores/toast';
import PrimaryButton from './PrimaryButton.vue';

const habits = useHabitsStore();
const toast = useToastStore();

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  type: {
    type: String,
    default: 'add'
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const MAX_HABIT_NAME_LENGTH = 30;

const habitName = ref(props.data ? props.data.name : '');
const initialHabitName = props.data ? props.data.name : '';

const closeModal = () => {
  emit('close');
};

const saveAction = () => {
  if (habitName.value.length > MAX_HABIT_NAME_LENGTH) {
    toast.warning("Habit's name must not exceed 30 characters!");
    closeModal();
    return;
  }

  if (props.type === 'add') {
    try {
      habits.add(habitName.value.trim());
      toast.success(`Habit created!`);
    } catch (error) {
      toast.error(error.toString());
    }
    habitName.value = '';
  } else {
    try {
      habits.edit(props.data.id, habitName.value.trim());
      toast.success(`Habit's name changed!`);
    } catch (error) {
      toast.error(error.toString());
      habitName.value = initialHabitName;
    }
  }

  closeModal();
};
</script>

<template>
  <div class="fixed inset-0 h-screen w-full bg-gray-500 bg-opacity-75" v-show="isOpen">
    <div class="flex min-h-full items-center justify-center p-4 text-center">
      <div
        class="relative flex flex-col items-center justify-center gap-3 rounded-lg bg-background p-10"
      >
        <svg
          class="absolute right-2 top-2 cursor-pointer fill-text"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          @mousedown="closeModal"
        >
          <path
            d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
          ></path>
        </svg>
        <h2 class="text-base font-bold capitalize text-text sm:text-lg">{{ props.type }} habit</h2>
        <label class="sr-only" for="habit-name">Habit name</label>
        <input
          class="mt-2 w-full rounded-md bg-secondary px-4 py-2 text-xs text-text outline-none transition-all duration-300 ease-out placeholder:text-text placeholder:opacity-50 sm:text-sm"
          type="text"
          id="habit-name"
          placeholder="Enter the name of a habit"
          v-model="habitName"
        />
        <PrimaryButton
          class="w-full capitalize"
          :disabled="habitName.trim() === initialHabitName"
          @click="saveAction"
          >{{ props.type }}</PrimaryButton
        >
      </div>
    </div>
  </div>
</template>
